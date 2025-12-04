import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${(props) => props.theme.darkGray};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 14px;

  * {
    font-weight: 500;
  }
`;

export const TopContainer = styled.section`
  display: grid;
  grid-gap: 10px 25%;
  grid-template-areas:
    'title title'
    'itens itens-price'
    'delivery-tax delivery-tax-price';

  .title {
    grid-area: title;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    width: 100%;
    background-color: ${(props) => props.theme.secondDarkGray};
    color: white;
    border-radius: 20px 20px 0 0;
    padding: 10px 0;
  }

  .itens {
    grid-area: itens;
    padding-left: 20px;
  }

  .itens-price {
    grid-area: itens-price;
    padding-right: 20px;
  }

  .delivery-tax {
    grid-area: delivery-tax;
    padding-left: 20px;
  }

  .delivery-tax-price {
    grid-area: delivery-tax-price;
    padding-right: 20px;
  }

  * {
    color: ${(props) => props.theme.lightGray};
  }
`;

export const BottomContainer = styled.section`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-top: 24px;
  padding: 20px;

  h4 {
    font-weight: 700;
    color: white;
  }
`;
