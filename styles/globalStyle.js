import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #191715;
        font-family: 'Source Sans Pro';
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    img {
        user-select: none;
        -webkit-user-drag: none;
    }
`;

export default GlobalStyle;
