import styled from 'styled-components';
import BannerImg from '../../assets/CartTopBackground.svg';
import BottomBackground from '../../assets/homeBottomBackground.png';
import { breakpoints } from '../../utils/breakpoints';

export const Container = styled.main`
  background-color: ${(props) => props.theme.dark};
`;

export const Content = styled.div`
  background: url('${BottomBackground}');
  background-size: cover;
  height: 100vh;
`;

export const BottomContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 12px;
  color: ${(props) => props.theme.green};
  text-align: center;
  position: relative;
  margin: 10px 0 20px 0;
  margin-top: 100px;

  &::after {
    position: absolute;
    content: '';
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.green};
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`;

export const ContentCart = styled.section`
  display: grid;
  grid-template-columns: 1fr 27.5%;
  width: 100%;
  max-width: 1280px;
  gap: 30px;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 20px;
  }
`;