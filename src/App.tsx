import React from 'react';

import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

import { Router } from './router/Router';
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/authProvider";
import usePersistedState from "./utils/usePersistensedState";

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggledTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
    <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
