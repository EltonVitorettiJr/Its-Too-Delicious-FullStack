import styled from 'styled-components';
import HomeTopBackground from '../../assets/homeTopBackground.svg';
import HomeBottomBackground from '../../assets/homeBottomBackground.png';
import { breakpoints } from '../../utils/breakpoints';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-shadow: black 1px 0px 2px;
  background-color: ${(props) => props.theme.dark};
`;

export const TopBackground = styled.section`
  width: 100%;
  height: 300px;
  background: url('${HomeTopBackground}');
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.tablet}) {
    height: 200px;
    margin-top: 72px;
  }

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

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 32px;
      right: 50%;
      transform: translateX(50%);
      top: 15%;
      width: 100%;
    }
  }
`;

export const BottomBackground = styled.section`
  width: 100%;
  background: url('${HomeBottomBackground}');
  background-size: cover;
  background-position: center;
  flex: 1;
  padding-bottom: 40px;
`;