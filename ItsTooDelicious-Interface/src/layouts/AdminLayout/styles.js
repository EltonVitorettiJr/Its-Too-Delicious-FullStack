import styled from 'styled-components';
import Background from '../../assets/homeBottomBackground.png';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 280px) 1fr;
  height: 100vh;
  background-color: ${(props) => props.theme.dark};

  main {
    background-image: url('${Background}');
    height: 100%;
    z-index: 1;
    background-size: cover;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  }

  section {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
