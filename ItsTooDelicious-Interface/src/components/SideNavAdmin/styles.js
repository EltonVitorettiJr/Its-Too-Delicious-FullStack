import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 70%;
    margin-top: 20px;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin-top: 35px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: auto;
  margin-bottom: 30px;
`;

export const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  width: 100%;
  background-color: ${(props) =>
    props.$isActive ? props.theme.darkRed : 'transparent'};

  &:hover {
    background-color: ${(props) => props.theme.darkRed};
  }
`;
