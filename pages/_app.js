import "/public/styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Andrew Chen</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
