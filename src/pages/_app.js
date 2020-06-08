import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@app/config/theme';

import GlobalStyle from '@app/styles/global';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
