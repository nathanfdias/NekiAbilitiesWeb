import React from 'react';
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { Router } from './router/Router';
import usePersistedState from "./utils/usePersistensedState";
import { BrowserRouter } from "react-router-dom";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggledTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
