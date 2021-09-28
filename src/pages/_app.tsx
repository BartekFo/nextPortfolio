import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { Provider } from 'react-redux';

import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import store from '@store/index';
import { Props } from '@root/@types/pageTypes';

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <>
      <Head>
        <title>App Name</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,400;0,500;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {getLayout(<Component {...pageProps} />)}
        </Provider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;
