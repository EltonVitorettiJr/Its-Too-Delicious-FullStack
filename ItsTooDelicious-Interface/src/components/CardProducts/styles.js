import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const StylesCardProducts = styled.div`
  background-color: ${(props) => props.theme.darkGray};
  border-radius: 10px;
  width: 90%;
  height: 225px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  cursor: grab;
  padding: 13px 16px;
  gap: 15px;
  position: relative;
  margin-top: 50px; 

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 3px;
  }

  p {
    color: ${(props) => props.theme.orange};
    font-weight: 700;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  strong {
    color: ${(props) => props.theme.green};
    font-weight: 700;
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 190px;
    padding: 10px 12px;
    gap: 10px;

    p {
      font-size: 15px;
    }

    strong {
      font-size: 16px;
    }
  }
`;

export const ImageProduct = styled.img`
  width: 150px;
  position: absolute;
  top: -50px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 110px;
    top: -35px;
  }
`;