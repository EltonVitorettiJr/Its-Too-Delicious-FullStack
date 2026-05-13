import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const Root = styled.table`
  border-collapse: collapse;
  background-color: ${(props) => props.theme.darkGray};
  border-radius: 20px;
  width: 100%;
  height: auto;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    width: 100%;
    height: auto;
    overflow-x: auto;
    max-height: 600px;
    overflow-y: auto;
  }
`;

export const Header = styled.thead`
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  background-color: ${(props) => props.theme.secondDarkGray};
  padding: 11px 0;

  &:first-child {
    border-top-left-radius: 20px;
    width: 181px;
  }

  &:nth-child(2) {
    width: 340px;
  }

  &:nth-child(3) {
    width: 102px;
  }

  &:nth-child(4) {
    width: 116px;
  }

  &:nth-child(5) {
    width: 116px;
  }

  &:last-child {
    width: 60px;
    border-top-right-radius: 20px;
  }
`;

export const Td = styled.td`
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  padding: 10px;
  height: 162px;
`;

export const Body = styled.tbody``;