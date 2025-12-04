import styled from 'styled-components';

export const Root = styled.table`
  border-collapse: collapse;
  background-color: ${(props) => props.theme.darkGray};
  border-radius: 20px;
  width: 100%;
  height: auto;
`;

export const Header = styled.thead`
  max-height: 51px;
  position: fixed;
  z-index: 99;
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  color: white;
  text-align: left;
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
  &:last-child {
    width: 159px;
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
