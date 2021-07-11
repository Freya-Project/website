import "@fontsource/poppins";
import "@fontsource/source-sans-pro";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Source Sans Pro";
    }
`;

export default GlobalStyle;
