import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalSyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <title>React Avançado - Boilerplate</title>
      </Head>
      <GlobalSyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
