import { TransactionsTable } from "@/components/TransactionsTable";
import DashboardLayout from "@/layouts/dashboardLayout";
import { useEffect, useState } from "react";

import { useAppContext } from "@/context/AppContext";
import { PeraWalletConnect } from "@perawallet/connect";
import { AlgorandClient } from "@/services/algorand_client";
import { useWallet } from "@txnlab/use-wallet";

const peraWallet = new PeraWalletConnect();

export default function Transactions() {
  const { state } = useAppContext();
  const { activeAddress } = useWallet();
  const [txns, setTxns] = useState<{
    l: boolean;
    v: any;
    e: any;
  }>({
    l: false,
    v: null,
    e: null,
  });

  useEffect(() => {
    async function fetch() {
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

          return accountTxnsResponse;
        } catch (e) {
          console.error(e);
          // showErrorToast("Error occurred while fetching transaction history");

          setTxns({
            v: null,
            l: false,
            e: e,
          });
        }
      }

      if (activeAddress && state.network) {
        try {
          setTxns({
            l: true,
            v: null,
            e: null,
          });
          const accountTxnsResponse = await fetchTxns(
            "",
            state.network,
            activeAddress
          );
          setTxns({
            l: false,
            v: accountTxnsResponse,
            e: null,
          });
        } catch (e) {
          setTxns({
            l: false,
            v: null,
            e: e,
          });
        }
      } else {
        setTxns({
          l: false,
          v: null,
          e: new Error("No connected account"),
        });
      }
    }

    fetch();
  }, [activeAddress, state.network]);

  console.log("activeAddress", activeAddress);

  let jsx = null;
  if (txns.l) {
    jsx = "...";
  } else if (txns.v) {
    jsx = <TransactionsTable txns={txns.v} activeAddress={activeAddress} />;
  } else {
    jsx = txns?.e?.message?.toString();
  }

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Transactions
            </h2>
          </div>
        </div>
      </div>
      {jsx}
    </DashboardLayout>
  );
}
