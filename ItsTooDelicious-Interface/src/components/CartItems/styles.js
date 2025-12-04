import styled from 'styled-components';

export const ProductImg = styled.img`
  width: 100%;
  max-width: 150px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
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
  }
`;

export const EmptyCart = styled.p`
  text-align: center;
`;
