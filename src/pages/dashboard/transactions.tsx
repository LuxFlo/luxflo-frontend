import { TransactionsTable } from "@/components/TransactionsTable";
import DashboardLayout from "@/layouts/dashboardLayout";
import { useEffect, useState } from "react";

import { useAppContext } from "@/context/AppContext";
import { PeraWalletConnect } from "@perawallet/connect";
import { AlgorandClient } from "@/services/algorand_client";

const peraWallet = new PeraWalletConnect();

async function fetchTxns(
  nextToken: string,
  network: string,
  accountAddress: string
) {
  try {
    console.log("__fetchTxns__", nextToken, network, accountAddress);

    const accountTxnsResponse = await AlgorandClient.getIndexer(network)
      .lookupAccountTransactions(accountAddress)
      .limit(21)
      .nextToken(nextToken)
      .do();

    console.log("accountTxnsResponse", accountTxnsResponse);
  } catch (e) {
    console.error(e);
    // showErrorToast("Error occurred while fetching transaction history");
  }
}

export default function Transactions() {
  const { state, dispatch } = useAppContext();
  const [accountAddress, setAccountAddress] = useState<string>("");
  const isConnectedToPeraWallet = !!accountAddress;

  const [txns, setTxns] = useState({
    l: true,
    v: null,
    e: null,
  });

  function handleConnectWalletClick() {
    console.log("handleConnectWalletClick");
    peraWallet
      .connect()
      .then((newAccounts) => {
        peraWallet?.connector?.on("disconnect", handleDisconnectWalletClick);

        console.log("newAccounts", newAccounts);

        setAccountAddress(newAccounts[0] || "");
      })
      .catch((error) => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          console.log(error);
        }
      });
  }

  function handleDisconnectWalletClick() {
    console.log("handleDisconnectWalletClick");
    peraWallet.disconnect();

    setAccountAddress("");
  }

  useEffect(() => {
    async function fetch() {
      console.log("useEffect", accountAddress, state.network);

      if (accountAddress && state.network) {
        await fetchTxns("", state.network, accountAddress);
      }
    }

    fetch();
  }, [accountAddress, state.network]);

  useEffect(() => {
    console.log("Reconnect to the session when the component is mounted");
    // Reconnect to the session when the component is mounted
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        peraWallet?.connector?.on("disconnect", handleDisconnectWalletClick);

        console.log("reconnectSession");

        if (accounts.length) {
          setAccountAddress(accounts[0]);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  console.log("accountAddress", accountAddress);

  let jsx = null;
  if (txns.l) {
    jsx = "...";
  } else if (txns.v) {
    jsx = <TransactionsTable txns={txns.v} accountAddress={accountAddress} />;
  } else {
    jsx = "?";
  }

  return (
    <DashboardLayout
      isConnectedToPeraWallet={isConnectedToPeraWallet}
      handleDisconnectWalletClick={handleDisconnectWalletClick}
      handleConnectWalletClick={handleConnectWalletClick}
    >
      <TransactionsTable txns={[]} accountAddress={accountAddress} />
    </DashboardLayout>
  );
}
