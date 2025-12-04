import styled from 'styled-components';
import HomeTopBackground from '../../assets/homeTopBackground.svg';
import HomeBottomBackground from '../../assets/homeBottomBackground.png';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-shadow: black 1px 0px 2px;
  background-color: ${(props) => props.theme.dark};
`;

export const TopBackground = styled.section`
  width: auto;
  height: 300px;
  background: url('${HomeTopBackground}');
  background-size: cover;
  background-position: center;
  z-index: 2;

  h1 {
    text-align: center;
    font-size: 45px;
    font-family: 'Road Rage', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${(props) => props.theme.lightGray};
    z-index: 2;
    position: absolute;
    right: 20%;
    top: 10%;
  }
`;

export const BottomBackground = styled.section`
  width: 100%;
  background: url('${HomeBottomBackground}');
  background-size: cover;
`;
