import React from 'react';
import GlobalStyle from './globalStyle';
import MainRouter from './routes';

const App = () => {
    return (
        <>
            <GlobalStyle/>
            <div>Hello World!</div>
            <MainRouter/>
        </>
    );
}

export default App;

