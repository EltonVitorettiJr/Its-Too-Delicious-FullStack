import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const Container = styled.div`
  .carousel-item {
    padding: 0px 20px;
    display: flex;
    justify-content: center;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 0px 10px;
    }
  }

  .react-multiple-carousel__arrow {
    top: 10px;

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  text-shadow: black 1px 0px 2px;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: ${(props) => props.theme.orange};
  text-align: center;
  padding-bottom: 12px;
  font-weight: 700;
  position: relative;
  margin: 10px 0 20px;

  &::after {
    content: '';
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.orange};
    bottom: 0;
    border-radius: 2px;
    left: calc(50% - 28px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
  }
`;

export const ConteinerItems = styled.div`
  background: url('${(props) => props.$imageurl}');
  display: flex;
  align-items: end;
  width: 90%;
  height: 200px;
  background-size: cover;
  background-position: center;
  padding: 20px 10px;
  border-radius: 10px;
  cursor: grab;

  @media (max-width: ${breakpoints.tablet}) {
    height: 150px;
    width: 95%;
    padding: 10px;
  }
`;

export const CategoryButton = styled(Link)`
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 20px;
  border-radius: 20px;
  padding: 5px 15px;
  font-weight: 500;
  margin: 0 0 20px 7px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  color: white;

  &:hover {
    background-color: ${(props) => props.theme.middleRed};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
    margin: 0 0 5px 0;
  }
`;