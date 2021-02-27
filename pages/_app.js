import { createGlobalStyle, ThemeProvider } from "styled-components";

import DB from "../db.json";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={DB.theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
