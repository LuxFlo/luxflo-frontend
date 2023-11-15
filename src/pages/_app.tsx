import { AppWrapper } from "@/context/AppContext";
import "@/styles/globals.css";
import "react-datetime/css/react-datetime.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Kalygo" />
        <meta
          property="og:description"
          content="LuxFlo is a luxury rentals platform powered by Algorand."
        />
        <meta property="og:image" content="/luxflo_logo-512x512.png" />
        <link rel="apple-touch-icon" href="/luxflo_logo-192x192.png" />
        <meta
          name="description"
          content="LuxFlo is a luxury rentals platform powered by Algorand."
        />
        <meta name="keywords" content="luxury goods, luxury rentals, luxury" />
      </Head>

      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}
