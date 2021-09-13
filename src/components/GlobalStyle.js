import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle({
  "*": {
    margin: 0,
    padding: 0,
    userSelect: "none",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
});
