import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Container, ProductImage, EditButton } from './styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  CheckCircleIcon,
  PencilIcon,
  XCircleIcon,
} from '@phosphor-icons/react';
import { formatPrice } from '../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

export function Products() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');

      setProducts(data);
    }
    loadProducts();
  }, []);

  function isOffer(offer) {
    if (offer) {
      return <CheckCircleIcon size={'22px'} color="green" />;
    } else {
      return <XCircleIcon size={'22px'} color="red" />;
    }
  }

  function editProduct(product) {
    navigate('/admin/editar-produto', { state: { product } });
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Em Oferta</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{formatPrice(product.price)}</TableCell>
                <TableCell>{isOffer(product.offer)}</TableCell>
                <TableCell>
                  <ProductImage src={product.url} alt={product.name} />
                </TableCell>
                <TableCell>
                  <EditButton onClick={() => editProduct(product)}>
                    <PencilIcon size={'22px'} color="white" />
                  </EditButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
