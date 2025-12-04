import styled from 'styled-components';
import BannerImg from '../../assets/CartTopBackground.svg';
import BottomBackground from '../../assets/homeBottomBackground.png';

export const Container = styled.main`
  background-color: ${(props) => props.theme.dark};
`;

export const Content = styled.div`
  background: url('${BottomBackground}');
  height: 97.1vh;
`;

export const BottomContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const ContentCart = styled.section`
  display: grid;
  grid-template-columns: 1fr 27.5%;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  max-height: 525px;
  gap: 30px;
`;
