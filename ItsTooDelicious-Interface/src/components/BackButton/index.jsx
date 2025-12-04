import { StylesBackButton } from './styles';
import backButton from '../../assets/backButtonImg.png';

export function BackButton() {
  return (
    <StylesBackButton to={'/'}>
      <img src={backButton} alt="imagem-botao-voltar" />
      &nbsp; Voltar
    </StylesBackButton>
  );
}
