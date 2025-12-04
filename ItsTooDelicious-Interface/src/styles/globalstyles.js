import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const globalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0%;
      padding: 0%;
      outline: none;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      color: #fff;
    }

    button {
      cursor: pointer;
    }
`;

export default globalStyle;
