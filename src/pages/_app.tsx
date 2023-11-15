import { AppWrapper, useAppContext } from "@/context/AppContext";
import "@/styles/globals.css";
import "react-datetime/css/react-datetime.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  PROVIDER_ID,
  ProvidersArray,
  WalletProvider,
  useInitializeProviders,
} from "@txnlab/use-wallet";
import { PeraWalletConnect } from "@perawallet/connect";
import { supportedNetworks } from "@/services/algorand_client";
import algosdk from "algosdk";

let providersArray: ProvidersArray;
providersArray = [
  { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
  // refer to https://github.com/TxnLab/use-wallet for detailed WalletConnect v2 provider integration instructions
];

export default function App({ Component, pageProps }: AppProps) {
  const { state } = useAppContext();

  const walletProviders = useInitializeProviders({
    providers: providersArray,
    nodeConfig: {
      network: state.network,
      nodeServer: supportedNetworks[state.network].algod.server,
      nodePort: String(supportedNetworks[state.network].algod.port),
      nodeToken: String(supportedNetworks[state.network].algod.token),
    },
    algosdkStatic: algosdk,
  });

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
        <meta property="og:title" content="LuxFlo" />
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
      <WalletProvider value={walletProviders}>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </WalletProvider>
    </>
  );
}
