import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: auto;
  max-height: 700px;
  border-radius: 20px;

  th {
    text-align: center;
    background-color: ${(props) => props.theme.secondDarkGray};
    border-bottom: ${(props) => props.theme.assistenceBorder};
    color: white;
  }

  td {
    text-align: center;
    background-color: ${(props) => props.theme.darkGray};
    border-bottom: ${(props) => props.theme.assistenceBorder};
    color: white;
  }

  .css-1dc80h3-MuiTableCell-root {
    background-color: ${(props) => props.theme.darkGray};
  }
`;

export const CategoryImage = styled.img`
  height: 100px;
  padding: 12px;
  border-radius: 16px;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: gray;
  border-radius: 5px;
  padding: 3px;
  transition: ease-in-out 0.2s;
  height: 28px;

  &:hover {
    opacity: 0.8;
  }
`;
