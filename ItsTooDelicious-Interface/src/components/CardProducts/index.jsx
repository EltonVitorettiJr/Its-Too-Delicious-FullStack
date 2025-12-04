import { CartButton } from '../CartButton';
import { ImageProduct, StylesCardProducts } from './styles';
import propTypes from 'prop-types';

import { useCart } from '../../hooks/CartContext';

export function CardProducts({ product }) {
  const { putProductInCart } = useCart();

  return (
    <StylesCardProducts>
      <ImageProduct src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>
      <CartButton onClick={() => putProductInCart(product)}></CartButton>
    </StylesCardProducts>
  );
}

CardProducts.propTypes = {
  product: propTypes.object,
};
