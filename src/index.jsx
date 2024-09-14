import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import Context, { useCharStates } from "./Context/Context";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ThemeWrapper = ({children}) => {
  const { state } = useCharStates();

  const theme = createTheme({
    colorSchemes: {
      dark: state.theme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context>
      <React.StrictMode>
        <ThemeWrapper>
          <App/>
        </ThemeWrapper>
      </React.StrictMode>
    </Context>
  </BrowserRouter>
);
