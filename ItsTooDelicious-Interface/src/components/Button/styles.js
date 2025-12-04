import styled from 'styled-components';

export const StylesButton = styled.button`
  width: 100%;
  height: 52px;
  font-size: 36px;
  background-color: ${(props) => props.theme.red};
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Road Rage', sans-serif;
  font-style: normal;
  margin-top: 10px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.middleRed};
  }
`;
