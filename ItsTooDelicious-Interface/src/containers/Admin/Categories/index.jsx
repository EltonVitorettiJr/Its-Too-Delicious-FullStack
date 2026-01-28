import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Container, CategoryImage, EditButton } from './styles';
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
import { useNavigate } from 'react-router-dom';
import { TrashButton } from '../../../components/TrashButton';

export function Categories() {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadcategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }
    loadcategories();
  }, [categories]);

  function editCategory(category) {
    navigate('/admin/editar-categoria', { state: { category } });
  }

  function deleteCategory(id) {
    if (confirm('Tem certeza que deseja excluir esta categoria?')) {
      api.delete(`/categories/${id}`).then(() => {
        const newCategories = categories.filter((category) => category.id !== id)

        setCategories(newCategories)
      }
      )
    }
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow
                key={category.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {category.name}
                </TableCell>
                <TableCell>
                  <CategoryImage src={category.url} alt={category.name} />
                </TableCell>
                <TableCell>
                  <div style={{ display: "flex", gap: "10px", height: "100%", alignItems: "center", justifyContent: "center" }}>
                    <EditButton onClick={() => editCategory(category)} style={{ margin: "0" }}>
                      <PencilIcon size={'22px'} color="white" />
                    </EditButton>
                    <TrashButton onClick={() => deleteCategory(category.id)} style={{ margin: '0' }} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
