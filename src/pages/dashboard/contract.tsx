import * as algokit from "@algorandfoundation/algokit-utils";
import { useAppContext } from "@/context/AppContext";
import { EscrowClient } from "@/contracts/EscrowClient";
import DashboardLayout from "@/layouts/dashboardLayout";
import { supportedNetworks } from "@/services/algorand_client";
import { PeraWalletConnect } from "@perawallet/connect";
import { useEffect, useState } from "react";
import {
  PROVIDER_ID,
  ProvidersArray,
  WalletProvider,
  useInitializeProviders,
  useWallet,
} from "@txnlab/use-wallet";
import algosdk from "algosdk";
import ContractForm from "@/components/ContractForm";
import ConnectWallet from "@/components/ConnectWallet";
import TxnLabConnect from "@/components/TxnLabConnect";

export default function Contract() {
  const { state } = useAppContext();
  const [appID, setAppID] = useState<number>(0);

  const algodClient = algokit.getAlgoClient({
    server: supportedNetworks[state.network].algod.server,
    token: supportedNetworks[state.network].algod.token,
    port: supportedNetworks[state.network].algod.port,
  });

  const { activeAddress } = useWallet();

  const typedClient = new EscrowClient(
    {
      resolveBy: "id",
      id: appID,
    },
    algodClient
  );

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Create a contract
            </h2>
          </div>
        </div>
      </div>
      <ContractForm typedClient={typedClient} />
    </DashboardLayout>
  );
}
