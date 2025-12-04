import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.middleRed};
  min-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  h3 {
    font-size: 15px;
  }
`;
