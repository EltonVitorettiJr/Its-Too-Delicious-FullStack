import { Link } from 'react-router-dom';
import Select from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  th {
    color: white;
    border-bottom: none;
  }

  tbody {
    background-color: ${(props) => props.theme.darkGray};
    color: white;
  }

  .last-cell-body-table {
    display: flex;
    align-items: center;
    gap: 8%;
  }

  .css-y2ff7i-MuiPaper-root-MuiTableContainer-root {
    border-radius: 20px;
    background-color: transparent;
    color: white;
  }

  .css-1dc80h3-MuiTableCell-root {
    border-bottom: ${(props) => props.theme.assistenceBorder};
    color: white;
  }

  .css-1a7iywq-MuiTableHead-root {
    background-color: ${(props) => props.theme.secondDarkGray};
    color: white;
  }

  .css-3ssuu9-MuiTableCell-root {
    color: white;
    border-bottom: ${(props) => props.theme.assistenceBorder};
  }

  .css-jiabcu-MuiTableCell-root {
    color: white;
    border-bottom: ${(props) => props.theme.assistenceBorder};
  }

  .css-17j8okc-MuiTableCell-root {
    color: white;
    border-bottom: ${(props) => props.theme.assistenceBorder};
  }
`;

export const ProductImage = styled.img`
  height: 100px;
  padding: 12px;
  border-radius: 16px;
`;

export const SelectStatus = styled(Select)`
  width: 240px;
`;

export const Filter = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export const FilterOption = styled.button`
  font-size: 24px;
  color: ${(props) =>
    props.$isActiveOption ? (props) => props.theme.darkRed : 'gray'};
  text-align: center;
  font-weight: 600;
  position: relative;
  text-decoration: none;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveOption ? `2px solid ${props.theme.darkRed}` : 'none'};
  margin-bottom: 15px;
  background-color: transparent;
`;

export const colourStyles = {
  // 1. Estiliza as OPÇÕES (o menu que abre)
  option: (props, state) => ({
    ...props,
    // Se estiver selecionado ou com mouse em cima (focused)
    backgroundColor: state.isSelected
      ? 'gray'
      : state.isFocused
        ? 'gray'
        : '#353535ff',
    // Cor do texto
    color: 'white',
  }),

  // 2. Estiliza o INPUT principal (a barra escura)
  control: (props, state) => ({
    ...props,
    backgroundColor: '#353535ff', // Cor de fundo escura da sua barra
    borderColor: state.isFocused ? '#d9d9d9ff' : '#555',
    boxShadow: 'none',
    color: 'white',

    '&:hover': {
      borderColor: '#d9d9d9ff',
    },
  }),

  // 3. Estiliza o valor SELECIONADO (o texto que fica na barra depois que escolhe)
  singleValue: (props) => ({
    ...props,
    color: 'white', // <--- AQUI MUDA A COR DO TEXTO SELECIONADO (Branco)
  }),

  // 4. Estiliza o PLACEHOLDER (o texto "Selecione..." antes de escolher)
  placeholder: (props) => ({
    ...props,
    color: '#d9d9d9ff',
  }),

  menuList: (props) => ({
    ...props,
    padding: 0, // <--- Tira o espaço branco do topo e do fim
  }),

  menu: (props) => ({
    ...props,
    borderRadius: 8, // Ajuste conforme o design do seu input
    overflow: 'hidden', // Garante que nada saia para fora das bordas arredondadas
  }),
};
