import {
  BottomContainer,
  Container,
  Content,
  ContentCart,
  Title,
} from './styles';
import { CartItems, CartResume } from '../../components';

export function Cart() {
  return (
    <Container>
      <Content>
        <BottomContainer>
          <Title>Checkout - Pedido</Title>
          <ContentCart>
            <CartItems></CartItems>
            <CartResume></CartResume>
          </ContentCart>
        </BottomContainer>
      </Content>
    </Container>
  );
}
