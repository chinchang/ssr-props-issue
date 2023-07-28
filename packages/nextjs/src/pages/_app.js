import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title key="title">serversideprops test</title>
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
