import { TransactionsTable } from "@/components/TransactionTable";
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
    // accountTxnsStateSetter({
    //   val: accountTxnsResponse,
    //   loading: false,
    //   error: null,
    // });
  } catch (e) {
    console.error(e);
    // accountTxnsStateSetter({
    //   val: null,
    //   loading: false,
    //   error: e,
    // });
    // showErrorToast("Error occurred while fetching transaction history");
  }
}

export default function Transactions() {
  const { state, dispatch } = useAppContext();
  const [accountAddress, setAccountAddress] = useState<string>("");
  const isConnectedToPeraWallet = !!accountAddress;

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
    console.log("useEffect", accountAddress, state.network);
    if (accountAddress && state.network) {
      fetchTxns("", state.network, accountAddress);
    }
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

  return (
    <DashboardLayout
      isConnectedToPeraWallet={isConnectedToPeraWallet}
      handleDisconnectWalletClick={handleDisconnectWalletClick}
      handleConnectWalletClick={handleConnectWalletClick}
    >
      <TransactionsTable txns={[]} />
    </DashboardLayout>
  );
}
