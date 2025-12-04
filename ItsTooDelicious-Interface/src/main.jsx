import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globalstyles';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig';
import { ThemeProvider } from 'styled-components';
import { standartTheme } from './styles/themes/standart';
import { Router } from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standartTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={3000} theme="colored" />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
);
