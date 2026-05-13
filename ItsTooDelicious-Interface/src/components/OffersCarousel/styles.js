import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const Container = styled.div`
  .offer-product {
    padding: 0px 20px;
    display: flex;
    justify-content: center;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 0px 10px;
    }
  }

  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multiple-carousel__arrow {
    top: 10px;

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  text-shadow: black 1px 0px 2px;
  margin-bottom: 35px;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: ${(props) => props.theme.green};
  text-align: center;
  padding-bottom: 12px;
  font-weight: 700;
  position: relative;
  margin: 10px 0 55px;

  &::after {
    content: '';
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.green};
    bottom: 0;
    border-radius: 2px;
    left: calc(50% - 28px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
    margin: 10px 0 35px;
  }
`;