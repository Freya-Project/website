import Head from 'next/head';
import GlobalStyle from '../styles/globalStyle';
import styled from 'styled-components';
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/300.css";

const MainDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function App({ Component, pageProps }){
    return (<>
        <GlobalStyle/>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Freya Bot" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        </Head>
        <MainDiv>
            <Component {...pageProps} />
        </MainDiv>
    </>);
}

export default App;
