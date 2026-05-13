import styled from 'styled-components';
import BannerImg from '../../assets/Top-Background-Menu.svg';
import BottomBackgroundImg from '../../assets/homeBottomBackground.png';
import { Link } from 'react-router-dom';
import { breakpoints } from '../../utils/breakpoints';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-shadow: black 1px 0px 2px;
  background-color: ${(props) => props.theme.dark};
`;

export const Banner = styled.div`
  background: url('${BannerImg}');
  background-position: center;
  background-size: cover;
  width: 100%;
  padding: 4% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 0;
  position: relative;
  height: 300px;

  h1 {
    font-size: 45px;
    font-family: 'Road Rage', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: white;
    position: absolute;
    top: 37%;
    right: 20%;
    line-height: 40px;
    z-index: 1;
  }

  p {
    text-align: right;
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    color: white;
    position: absolute;
    top: 79%;
    right: 19%;
    z-index: 1;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 200px;
    margin-top: 72px;

    h1 {
      font-size: 32px;
      right: 50%;
      transform: translateX(50%);
      top: 10%;
      width: 100%;
    }

    p {
      font-size: 14px;
      text-align: center;
      right: 50%;
      transform: translateX(50%);
      top: 70%;
      width: 100%;
    }
  }
`;

export const BottomBackground = styled.div`
  background: url('${BottomBackgroundImg}');
  width: 100%;
  z-index: 2;
  background-size: 1010px;
  min-height: 100vh;
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 70px 0 0;
  
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: flex-start;
    gap: 20px;
    padding: 0 20px 10px;
    flex-wrap: wrap;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const CategoryButton = styled(Link)`
  font-size: 24px;
  color: ${(props) =>
    props.$isActiveCategory
      ? props.theme.red
      : props.theme.darkOrange};
  text-align: center;
  font-weight: 600;
  position: relative;
  text-decoration: none;
  border-bottom: ${(props) =>
    props.$isActiveCategory ? `2px solid ${props.theme.selectedBorder}` : 'none'};
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 60px 40px 0;
  max-width: 1280px;
  gap: 60px 45px;
  margin: 40px auto;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 40px 20px 0;
    justify-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 20px 15px 0;
    gap: 50px;
    justify-items: center;
  }
`;