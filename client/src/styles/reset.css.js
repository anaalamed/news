import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  html,body,#root{min-height:100%}
  html{font-size:10px;}
  body{
    /* border:deeppink 1px solid; */
    font-size:1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-image: url("night.jpeg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center top;
    color: midnightblue;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: midnightblue;
    font-weight: bold;
  }
`;
