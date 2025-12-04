import styled from 'styled-components';

export const StylesCartButton = styled.button`
  width: 97%;
  height: 40px;
  background-color: ${(props) => props.theme.red};
  border: none;
  border-radius: 5px;
  color: white;
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.middleRed};
  }
`;
