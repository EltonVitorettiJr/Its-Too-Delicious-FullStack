import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { ButtonGroup, EmptyCart, ProductImg } from './styles';
import { TrashButton } from '../TrashButton';

export function CartItems() {
  const {
    cartProducts,
    increaseProduct,
    decreaseProduct,
    removeProductFromCart,
  } = useCart();

  return (
    <div style={{ borderRadius: '20px', overflowY: 'auto' }}>
      <Table.Root>
        <Table.Header>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th>Itens</Table.Th>
            <Table.Th>Preço</Table.Th>
            <Table.Th>Quantidade</Table.Th>
            <Table.Th>Subtotal</Table.Th>
          </Table.Tr>
        </Table.Header>
        <Table.Body>
          <Table.Tr>
            <Table.Td style={{ height: '50px' }} />
          </Table.Tr>
          {cartProducts?.length ? (
            cartProducts.map((product) => (
              <Table.Tr key={product.id}>
                <Table.Td>
                  <ProductImg src={product.url} />
                </Table.Td>
                <Table.Td>{product.name}</Table.Td>
                <Table.Td>{product.currencyValue}</Table.Td>
                <Table.Td>
                  <ButtonGroup>
                    <button onClick={() => decreaseProduct(product.id)}>
                      -
                    </button>
                    {product.quantity}
                    <button onClick={() => increaseProduct(product.id)}>
                      +
                    </button>
                  </ButtonGroup>
                </Table.Td>
                <Table.Td style={{ fontWeight: 600 }}>
                  {formatPrice(product.quantity * product.price)}
                </Table.Td>
                <Table.Td>
                  <TrashButton
                    onClick={() => removeProductFromCart(product.id)}
                  />
                </Table.Td>
              </Table.Tr>
            ))
          ) : (
            <Table.Tr>
              <Table.Td>
                <EmptyCart>Carrinho vazio</EmptyCart>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
