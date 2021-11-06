import { ReactNode } from 'react';
import Head from 'next/head';

import GlobalStyles from '@styles/GlobalStyles';
import { Props } from '@root/@types/pageTypes';
import DarkThemeProvider from '@components/DarkTheme/darkThemeProvider';
import NavbarProvider from '@contextProviders/navbar-context';

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <>
      <Head>
        <title>Bartosz Fórmanowski - Developer</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="I'm Bartek, a developer who create React-based websites. I'm also interested in Node, Product Design. Contact. Dm me if u want to collaborate."
        />
        <meta property="og:title" content="Bartosz Fórmanowski - Developer" />

        <meta
          property="og:description"
          content="I'm Bartek, a developer who create React-based websites. I'm also interested in Node, Product Design. Contact. Dm me if u want to collaborate."
        />
        <meta property="og:image" content="/ogImage.png" />
        <meta property="og:url" content="https://bartoszformanowski.me/" />
        <meta name="author" content="Bartosz Fórmanowski" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <DarkThemeProvider>
        <NavbarProvider>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {getLayout(<Component {...pageProps} />)}
        </NavbarProvider>
        <GlobalStyles />
      </DarkThemeProvider>
    </>
  );
};

export default App;
