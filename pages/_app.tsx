import { useState } from "react";
import GlobalStyle from "../styles/global";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
