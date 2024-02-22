import "@fontsource/cookie"
import "@fontsource/josefin-sans"
import "@fontsource/fredoka-one"
import "@fontsource/palanquin-dark"
import "@fontsource/inter"

import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`

  *,*::before,*::after{
    margin:0;
    padding:0;
  }

  body {
    font-family: "Arial";
    font-weight: 1000;
    overflow-x: hidden;
  }

  h1,h2,h3,h4,h5,h6 {
    margin:0;
    padding:0;
  }

  a{
    color:inherit;
    text-decoration:none;
  }
`;
 
export default GlobalStyles;