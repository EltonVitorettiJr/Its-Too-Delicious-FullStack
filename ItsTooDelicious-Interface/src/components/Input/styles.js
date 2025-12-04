import styled from 'styled-components';

export const StylesInput = styled.input`
  height: 45px;
  width: 100%;
  font-size: 17px;
  padding-left: 12px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.theme.lightGray};
  box-shadow: black 1px 0px 2px;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.secondDarkGray};
  transition: 0.3s ease-in-out;

  &:focus {
    background-color: #c1baafff;
  }
`;
