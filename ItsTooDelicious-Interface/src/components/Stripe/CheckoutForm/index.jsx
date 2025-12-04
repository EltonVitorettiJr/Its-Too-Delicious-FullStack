import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles.css';
import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

export default function CheckoutForm() {
  const {
    state: { dpmCheckerLink },
  } = useLocation();

  const { cartProducts, clearCart } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe ou Elements com falha!');
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    console.log(paymentIntent);
    console.log(error);

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status == 'succeeded') {
      const products = cartProducts.map((product) => {
        return {
          id: product.id,
          quantity: product.quantity,
          price: product.price,
        };
      });
      let toastId = toast.loading('Confirmando pagamento...');

      try {
        const { status } = await api.post(
          '/orders',
          { products },
          {
            validateStatus: () => true,
          },
        );

        switch (status) {
          case 200:
          case 201:
            setTimeout(() => {
              navigate(
                `/pagamento-concluido?payment_intent_client_secret=${paymentIntent.client_secret}`,
              );
            }, 2000);
            toastId = toast.update(toastId, {
              render: 'Pagamento realizado com sucesso!',
              type: 'success',
              isLoading: false,
              autoClose: 2000,
            });
            clearCart();
            break;
          default:
            throw new Error();
        }
      } catch (error) {
        toastId = toast.update(toastId, {
          render: 'Falha no servidor, tente novamente...',
          type: 'error',
          isLoading: false,
          autoClose: 2000,
        });
      }
    } else {
      navigate(
        `/pagamento-concluido?payment_intent_client_secret=${paymentIntent.client_secret}`,
      );
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'accordion',
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              'Pagar Agora'
            )}
          </span>
        </button>
        {message && (
          <div style={{ color: 'red' }} id="payment-message">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
