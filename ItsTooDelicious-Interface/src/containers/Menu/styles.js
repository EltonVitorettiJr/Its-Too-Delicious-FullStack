import styled from 'styled-components';
import BannerImg from '../../assets/Top-Background-Menu.svg';
import BottomBackgroundImg from '../../assets/homeBottomBackground.png';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
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
`;

export const BottomBackground = styled.div`
  background: url('${BottomBackgroundImg}');
  width: 100%;
  z-index: 2;
  background-size: 1010px;
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const CategoryButton = styled(Link)`
  font-size: 24px;
  color: ${(props) =>
    props.$isActiveCategory
      ? (props) => props.theme.red
      : (props) => props.theme.darkOrange};
  text-align: center;
  font-weight: 600;
  position: relative;
  margin: 40px 0 0;
  text-decoration: none;
  border-bottom: ${(props) =>
    props.$isActiveCategory ? (props) => props.theme.selectedBorder : 'none'};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 60px 40px 0;
  max-width: 1280px;
  gap: 60px 45px;
  margin: 40px auto;
`;
