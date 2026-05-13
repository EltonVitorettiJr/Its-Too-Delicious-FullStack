import { Link } from 'react-router-dom';
import Select from 'react-select';
import styled from 'styled-components';
import { breakpoints } from '../../../utils/breakpoints';

export const Container = styled.div`
  color: white;
  padding-bottom: 20px;

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

  /* Garante o scroll horizontal no container do MUI */
  .MuiTableContainer-root {
    overflow-x: auto;
  }

  .css-y2ff7i-MuiPaper-root-MuiTableContainer-root {
    border-radius: 20px;
    background-color: transparent;
    color: white;
  }

  .css-1dc80h3-MuiTableCell-root,
  .css-3ssuu9-MuiTableCell-root,
  .css-jiabcu-MuiTableCell-root,
  .css-17j8okc-MuiTableCell-root {
    color: white;
    border-bottom: ${(props) => props.theme.assistenceBorder};
  }

  .css-1a7iywq-MuiTableHead-root {
    background-color: ${(props) => props.theme.secondDarkGray};
    color: white;
  }
`;

export const ProductImage = styled.img`
  height: 100px;
  padding: 12px;
  border-radius: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 70px;
    padding: 5px;
  }
`;

export const SelectStatus = styled(Select)`
  width: 240px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 160px; /* Reduz o tamanho do Select no mobile */
  }
`;

export const Filter = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap; /* Faz os botões pularem de linha se faltar espaço */
    gap: 15px;
    justify-content: center;
  }
`;

export const FilterOption = styled.button`
  font-size: 24px;
  color: ${(props) =>
    props.$isActiveOption ? props.theme.darkRed : 'gray'};
  text-align: center;
  font-weight: 600;
  position: relative;
  text-decoration: none;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveOption ? `2px solid ${props.theme.darkRed}` : 'none'};
  margin-bottom: 15px;
  background-color: transparent;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const colourStyles = {
  option: (props, state) => ({
    ...props,
    backgroundColor: state.isSelected
      ? 'gray'
      : state.isFocused
        ? 'gray'
        : '#353535ff',
    color: 'white',
  }),

  control: (props, state) => ({
    ...props,
    backgroundColor: '#353535ff',
    borderColor: state.isFocused ? '#d9d9d9ff' : '#555',
    boxShadow: 'none',
    color: 'white',

    '&:hover': {
      borderColor: '#d9d9d9ff',
    },
  }),

  singleValue: (props) => ({
    ...props,
    color: 'white',
  }),

  placeholder: (props) => ({
    ...props,
    color: '#d9d9d9ff',
  }),

  menuList: (props) => ({
    ...props,
    padding: 0,
  }),

  menu: (props) => ({
    ...props,
    borderRadius: 8,
    overflow: 'hidden',
  }),
};