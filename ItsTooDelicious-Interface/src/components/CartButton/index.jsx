import { StylesCartButton } from './styles';
import cart from '../../assets/CartButtonImg.svg';

export function CartButton({ ...props }) {
  return (
    <StylesCartButton {...props}>
      <img src={cart} alt="imagem-botao-carrinho" />
    </StylesCartButton>
  );
}
