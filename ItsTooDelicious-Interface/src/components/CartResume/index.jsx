import { Button } from '../Button';
import { BottomContainer, Container, TopContainer } from './styles';
import { useCart } from '../../hooks/CartContext.jsx';
import { api } from '../../services/api.js';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice.js';

export function CartResume() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryTax] = useState(500);

  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const sumTotalPrice = cartProducts.reduce((acc, current) => {
      return acc + current.price * current.quantity;
    }, 0);
    setTotalPrice(sumTotalPrice);
  }, [cartProducts]);

  const submitProducts = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });
    let toastId = toast.loading('Processando produtos...');

    try {
      const { data, status } = await api.post('/create-payment-intent', {
        products,
      });

      switch (status) {
        case 200:
        case 201:
          setTimeout(() => {
            navigate('/checkout', { state: data });
          }, 1000);
          toastId = toast.update(toastId, {
            render: 'Solicitação enviada!',
            type: 'success',
            isLoading: false,
            autoClose: 2000,
          });
          break;
        case 401:
          toastId = toast.update(toastId, {
            render: 'Verifique seus produtos!',
            type: 'error',
            isLoading: false,
            autoClose: 2000,
          });
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
  };

  return (
    <div>
      <Container>
        <TopContainer>
          <h2 className="title">Resumo do Pedido</h2>
          <p className="itens">Itens</p>
          <p className="itens-price">{formatPrice(totalPrice)}</p>
          <p className="delivery-tax">Taxa de Entrega</p>
          <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
        </TopContainer>
        <BottomContainer>
          <h4>Total</h4>
          <h4>{formatPrice(deliveryTax + totalPrice)}</h4>
        </BottomContainer>
      </Container>
      <Button onClick={() => submitProducts()}>Finalizar Pedido</Button>
    </div>
  );
}
