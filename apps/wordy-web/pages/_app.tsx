import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wordy</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Wordy" />
        <meta name="keywords" content="English, english, english course" />
        <meta name="author" content="Egemen Ceylan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <script src='scripts/attach-voice.js'></script> */}
        {/* <script src='scripts/event-listeners.js'></script> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
