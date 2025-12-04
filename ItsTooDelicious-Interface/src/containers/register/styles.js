import styled from 'styled-components';
import LoginBackground from '../../assets/login-background.png';
import MainBackground from '../../assets/main-background.png';
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const Mask = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  position: fixed;
  top: 0;
  opacity: 0.65;
  z-index: 1;
`;

export const LeftContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('${LoginBackground}');
  background-size: cover;

  img {
    width: 70%;
    filter: drop-shadow(0 0 0.35rem #a45a2fff);
    z-index: 2;
  }
`;

export const RightContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: url('${MainBackground}');
  background-size: cover;
  text-shadow: black 1px 0px 2px;

  p {
    text-decoration: none;
    color: white;
    z-index: 2;
  }
`;

export const Subtitle = styled.h2`
  text-align: center;
  width: 80%;
  font-size: 45px;
  font-family: 'Road Rage', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.theme.orange};
  z-index: 2;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 70%;
  z-index: 2;
  max-width: 500px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  font-weight: 600;

  label {
    font-size: 18px;
    padding-bottom: 5px;
    color: white;
  }

  input {
    height: 45px;
    width: 100%;
    font-size: 17px;
    padding-left: 12px;
    border-radius: 5px;
    border: none;
    background-color: ${(props) => props.theme.dirtGray};
    box-shadow: black 1px 0px 2px;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme.darkGray};

    &:focus {
      background-color: #afa99fff;
      transition: 0.3s ease-in-out;
    }
  }

  p {
    color: ${(props) => props.theme.lightRose};
    font-size: 14px;
    height: 10px;
    font-weight: 600;
  }
`;

export const Link = styled(ReactLink)`
  z-index: 2;
  color: white;
  font-weight: 600;
`;
