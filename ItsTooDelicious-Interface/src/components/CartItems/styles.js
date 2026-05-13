import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const Container = styled.div`
  border-radius: 20px;
  overflow-y: auto;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    table, thead, tbody, th, td, tr {
      display: block;
      width: 100%;
      height: auto !important;
      max-height: 250px;
    }

    thead {
      display: none;
    }

    tr.spacer {
      display: none;
    }

    tr.product-row {
      background-color: ${(props) => props.theme.darkGray};
      margin-bottom: 15px;
      border-radius: 15px;
      padding: 15px;
      display: grid;
      
      grid-template-areas:
        "img name trash"
        "img price empty"
        "quantity quantity subtotal";
      grid-template-columns: 80px 1fr auto;
      grid-template-rows: auto auto auto;
      gap: 15px;
      
      height: max-content !important;
      align-content: start;
    }

    tr.empty-cart {
      padding: 20px;
      text-align: center;
    }

    tr.product-row > td {
      border: none !important;
      padding: 0 !important;
      display: flex !important;
      align-items: center;
      color: white;
      justify-content: flex-start;
    }

    tr.product-row > td:nth-child(1) { 
      grid-area: img; 
    }
    
    tr.product-row > td:nth-child(2) { 
      grid-area: name; 
      font-size: 16px; 
      font-weight: bold; 
      color: ${(props) => props.theme.orange}; 
    }
    
    tr.product-row > td:nth-child(3) { 
      grid-area: price; 
      font-size: 14px; 
      color: ${(props) => props.theme.lightGray || '#ccc'}; 
    }
    
    tr.product-row > td:nth-child(4) { 
      grid-area: quantity; 
    }
    
    tr.product-row > td:nth-child(5) { 
      grid-area: subtotal; 
      justify-content: flex-end;
      color: ${(props) => props.theme.green}; 
    }
    
    tr.product-row > td:nth-child(6) { 
      grid-area: trash; 
      justify-content: flex-end;
    }
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  max-width: 150px;
  border-radius: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  gap: 10px;
  color: white;

  button {
    width: 32px;
    height: 32px;
    background-color: ${(props) => props.theme.red};
    border: none;
    border-radius: 5px;
    font-style: normal;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.2s ease-in-out;
    font-size: 21px;
    font-weight: 400;

    &:hover {
      background-color: ${(props) => props.theme.middleRed};
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 28px;
      height: 28px;
    }
  }
`;

export const EmptyCart = styled.p`
  text-align: center;
  color: white;
`;