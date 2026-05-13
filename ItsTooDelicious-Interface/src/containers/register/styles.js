import styled from 'styled-components';
import LoginBackground from '../../assets/login-background.png';
import MainBackground from '../../assets/main-background.png';
import { Link as ReactLink } from 'react-router-dom';
import { breakpoints } from '../../utils/breakpoints';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const Mask = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
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
  background-position: center;

  img {
    width: 70%;
    filter: drop-shadow(0 0 0.35rem #a45a2fff);
    z-index: 2;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 25vh;
    min-height: 150px;
    
    img {
      width: 40%;
      max-width: 180px;
    }
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
  background-position: center;
  text-shadow: black 1px 0px 2px;
  padding: 20px 0;

  p {
    text-decoration: none;
    color: white;
    z-index: 2;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    flex: 1;
    justify-content: flex-start;
    padding-top: 30px;
    padding-bottom: 50px;
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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 36px;
    margin-bottom: -10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 70%;
  z-index: 2;
  max-width: 500px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 85%;
    gap: 15px;
  }
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
    margin-top: 5px;
  }
`;

export const Link = styled(ReactLink)`
  z-index: 2;
  color: white;
  font-weight: 600;
`;