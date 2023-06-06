import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/globalStyles';
import theme from '../theme';
import FullStory from '../fullStory';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Component {...pageProps} />
                <FullStory />
            </ThemeProvider>
        );
    }
}

export default MyApp;
