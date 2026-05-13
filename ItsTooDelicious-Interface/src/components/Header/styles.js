import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from '../../utils/breakpoints';

export const Container = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${(props) => props.theme.dark};
  position: fixed;
  z-index: 99; 
  border-bottom: 1px solid #242424;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  img {
    width: 72px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

export const MenuButton = styled.button`
  display: none !important;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex !important;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  .nav-links {
    margin-left: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    hr {
      height: 24px;
      border: 1px solid #242424;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 72px;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.dark};
    padding: 20px;
    gap: 30px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);

    .nav-links {
      margin-left: 0;
      flex-direction: column;
      width: 100%;
      
      hr {
        display: none; 
      }
    }
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  display: flex;
  margin-left: 5px;
  transition: ease-in-out 0.2s;
  color: ${(props) =>
    props.$isActive ? props.theme.middleRed : 'white'};
  border-bottom: ${(props) =>
    props.$isActive ? `2px solid ${props.theme.selectedBorder}` : '2px solid transparent'};
  padding-bottom: 4px;
  font-weight: 500;

  &:hover {
    color: ${(props) => props.theme.middleRed};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
    border-top: 1px solid #242424;
    padding-top: 20px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: white;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    line-height: 90%;

    span {
      color: ${(props) => props.theme.orange};
      font-weight: 600;
    }
  }
`;

export const Logout = styled.button`
  color: ${(props) => props.theme.middleRed};
  background-color: transparent;
  border: none;
  font-weight: 600;
  text-decoration: none;
  text-align: start;
  transition: ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.red};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;