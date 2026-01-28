import styled from 'styled-components';

export const TrashButtonStyle = styled.button`
  width: 28px;
  height: 28px;
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
`;
