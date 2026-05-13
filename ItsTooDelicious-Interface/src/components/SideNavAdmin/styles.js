import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const Container = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.dark};

  img {
    width: 70%;
    margin-top: 20px;
  }

  @media (max-width: ${breakpoints.laptop}) {
    height: auto;
    width: 100%;
  }
`;

export const TopBar = styled.div`
  display: contents;

  @media (max-width: ${breakpoints.laptop}) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;

    img {
      width: 80px;
      margin-top: 0;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  transition: opacity 0.2s;

  &:active {
    opacity: 0.6;
  }

  @media (max-width: ${breakpoints.laptop}) {
    display: flex;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin-top: 35px;

  @media (max-width: ${breakpoints.laptop}) {
    margin-top: 0;
    /* Se $isOpen for true, exibe. Se false, esconde. */
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: auto;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints.laptop}) {
    margin-top: 0;
    margin-bottom: 10px;
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  }
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
  color: white;

  &:hover {
    background-color: ${(props) => props.theme.darkRed};
  }

  @media (max-width: ${breakpoints.laptop}) {
    padding: 15px 25px;
  }
`;