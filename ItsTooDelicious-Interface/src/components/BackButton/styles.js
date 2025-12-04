import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StylesBackButton = styled(Link)`
  width: 74px;
  height: 34;
  color: ${(props) => props.theme.middleRed};
  border: none;
  border-radius: 10px;
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto 20px;
  font-weight: 500;
  font-size: 16px;
  background-color: transparent;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  position: absolute;
  left: 10px;

  img {
    width: 8px;
  }

  &:hover {
    color: ${(props) => props.theme.red};

    backdrop-filter: blur(3px);
    box-shadow: rgba(46, 46, 46, 0.2) 0px 7px 29px 0px;
  }
`;
