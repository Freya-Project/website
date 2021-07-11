import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyle';
import MainRouter from './routes';
import * as Styles from './styles';
import DarkTheme from './themes/dark';

const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <Styles.Wrapper>
        <Styles.MainContainer>
          <MainRouter />
        </Styles.MainContainer>
      </Styles.Wrapper>
    </ThemeProvider>
  );
};

export default App;
