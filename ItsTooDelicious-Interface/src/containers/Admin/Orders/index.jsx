import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { Container, Filter, FilterOption } from './styles';

import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
import { orderStatusOptions } from './orderStatus';

export function Orders() {
  const [orders, setOrders] = useState([]); //variavel de backup dos pedidos
  const [rows, setRows] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]); //valores atuais (filtrados) na tela
  const [activeOption, setActiveOption] = useState(0);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('/orders');

      setOrders(data);
      setFilteredOrders(data);
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  }, [filteredOrders]);

  function handleOption(option) {
    if (option.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === option.value);
      setFilteredOrders(newOrders);
    }

    setActiveOption(option.id);
  }

  useEffect(() => {
    if (activeOption === 0) {
      setFilteredOrders(orders);
    } else {
      const optionIndex = orderStatusOptions.findIndex(
        (item) => item.id === activeOption,
      );

      const newFilteredOrders = orders.filter(
        (order) => order.status === orderStatusOptions[optionIndex].value,
      );

      setFilteredOrders(newFilteredOrders);
    }
  }, [orders]);

  return (
    <Container>
      <Filter>
        {orderStatusOptions.map((option) => (
          <FilterOption
            key={option.id}
            onClick={() => handleOption(option)}
            $isActiveOption={option.id === activeOption}
          >
            {option.label}
          </FilterOption>
        ))}
      </Filter>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido (ID)</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
