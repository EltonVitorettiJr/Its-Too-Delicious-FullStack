import { Button, Input as InputComponent } from '../../../components';
import ReactSelect from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  max-width: 1280px;
  margin-top: 100px;
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.dark};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
`;

export const InputGroup = styled.div`
  width: 100%;

  p {
    color: ${(props) => props.theme.lightRose};
    font-size: 14px;
    height: 10px;
    font-weight: 600;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  .offer-checkbox {
    width: 20px;
    cursor: pointer;
  }
`;

export const Label = styled.label``;

export const LabelUpload = styled.label`
  width: 100%;
  border: 1px dashed white;
  display: flex;
  padding: 10px;
  justify-content: start;
  align-items: center;
  gap: 7px;
  cursor: pointer;

  input {
    display: none;
  }
`;

export const Input = styled(InputComponent)``;

export const Select = styled(ReactSelect)`
  .css-tj5bde-Svg {
    fill: #555;
  }
`;

export const SubmitButton = styled(Button)``;

export const colourStyles = {
  // 1. Estiliza as OPÇÕES (o menu que abre)
  option: (props, state) => ({
    ...props,
    // Se estiver selecionado ou com mouse em cima (focused)
    backgroundColor: state.isSelected
      ? '#c1baafff'
      : state.isFocused
        ? '#c1baafff'
        : (props) => props.theme.lightGray,
    // Cor do texto
    color: '#191919',
  }),

  // 2. Estiliza o INPUT principal (a barra escura)
  control: (props, state) => ({
    ...props,
    backgroundColor: state.isFocused ? '#dbd4c8' : '#d9d9d9ff', // Cor de fundo escura da sua barra
    borderColor: state.isFocused ? '#555' : '#d9d9d9ff',
    boxShadow: 'none',
    color: '#191919',

    '&:hover': {
      borderColor: '#555',
    },
  }),

  // 3. Estiliza o valor SELECIONADO (o texto que fica na barra depois que escolhe)
  singleValue: (props) => ({
    ...props,
    color: '#191919', // <--- AQUI MUDA A COR DO TEXTO SELECIONADO (Branco)
  }),

  menuList: (props) => ({
    ...props,
    padding: 0, // <--- Tira o espaço branco do topo e do fim
  }),

  menu: (props) => ({
    ...props,
    borderRadius: 8, // Ajuste conforme o design do seu input
    overflow: 'hidden', // Garante que nada saia para fora das bordas arredondadas
  }),
};
