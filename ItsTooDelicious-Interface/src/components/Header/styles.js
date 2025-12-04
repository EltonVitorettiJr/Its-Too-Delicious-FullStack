import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${(props) => props.theme.dark};
  position: fixed;
  z-index: 99;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;

  button {
    background-color: transparent;
    border: none;
  }

  img {
    width: 72px;
  }

  hr {
    height: 24px;
    border: 1px solid #242424;
  }

  div {
    margin-left: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  display: flex;
  margin-left: 5px;
  transition: ease-in-out 0.2s;
  color: ${(props) =>
    props.$isActive ? (props) => props.theme.middleRed : 'white'};
  border-bottom: ${(props) =>
    props.$isActive ? (props) => props.theme.selectedBorder : 'white'};
  padding-bottom: 4px;

  &:hover {
    color: ${(props) => props.theme.middleRed};
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

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

  &:hover {
    color: ${(props) => props.theme.red};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;
