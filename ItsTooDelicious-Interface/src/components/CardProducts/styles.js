import styled from 'styled-components';

export const StylesCardProducts = styled.div`
  background-color: ${(props) => props.theme.darkGray};
  border-radius: 10px;
  width: 90%;
  height: 225px;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  cursor: grab;
  padding: 13px 16px;
  gap: 15px;
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 3px;
  }

  p {
    color: ${(props) => props.theme.orange};
    font-weight: 700;
    font-style: Bold;
    font-size: 18px;
  }

  strong {
    color: ${(props) => props.theme.green};
    font-weight: 700;
    font-style: Bold;
    font-size: 20px;
  }
`;

export const ImageProduct = styled.img`
  width: 150px;
  position: absolute;
  top: -50px;
`;
