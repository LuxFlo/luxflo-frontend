import * as algokit from "@algorandfoundation/algokit-utils";
import { ActionsWidget } from "@/components/DeployedContractComponents/ActionsWidget";
import { BalanceWidget } from "@/components/DeployedContractComponents/BalanceWidget";
import { StateWidget } from "@/components/DeployedContractComponents/StateWidget";
import DashboardLayout from "@/layouts/dashboardLayout";
import { supportedNetworks } from "@/services/algorand_client";
import { useRouter } from "next/router";
import algosdk from "algosdk";
import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { useWallet } from "@txnlab/use-wallet";
import { infoToast } from "@/utils/toasts";
import { EscrowClient } from "@/contracts/EscrowClient";
import { parseGlobalState } from "@/utils/algorand/parseGlobalState";
import get from "lodash.get";

export default function DeployedContract() {
  const { state } = useAppContext();
  const router = useRouter();

  const [app, setApp] = useState<any>({
    val: undefined,
    loading: false,
    error: undefined,
  });

  const [account, setAccount] = useState<any>({
    val: undefined,
    loading: false,
    error: undefined,
  });

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const appId = searchParams.get("app-id") || "0";
  let appIdAsNumber = Number.parseInt(appId);
  const algodClient = algokit.getAlgoClient({
    server: supportedNetworks[state.network].algod.server,
    token: supportedNetworks[state.network].algod.token,
    port: supportedNetworks[state.network].algod.port,
  });

  const indexerClient = algokit.getAlgoIndexerClient({
    server: supportedNetworks[state.network].algod.server,
    token: supportedNetworks[state.network].algod.token,
    port: supportedNetworks[state.network].algod.port,
  });

  useEffect(() => {
    async function fetch() {
      try {
        // STEP 1
        const appResponse = await indexerClient
          .lookupApplications(Number.parseInt(appId!))
          .do();

        setApp({
          val: parseGlobalState(
            appResponse?.params && appResponse.params["global-state"]
          ),
          loading: false,
          error: null,
        });
        const appAddress = await algosdk.getApplicationAddress(
          Number.parseInt(appId!)
        );
        // STEP 2
        const accountResponse = await algodClient
          .accountInformation(appAddress)
          .do();

        setAccount({
          val: accountResponse,
          loading: false,
          error: null,
        });

        // const parsedGlobalState = parseGlobalState(
        //   appResponse?.application?.params &&
        //     appResponse.application.params["global-state"]
        // );
      } catch (e) {
        console.log("e", e);

        setApp({
          val: null,
          loading: false,
          error: e,
        });
      }
    }

    fetch();
  }, []);

  const typedClient = new EscrowClient(
    {
      resolveBy: "id",
      id: appIdAsNumber,
    },
    algodClient
  );

  console.log("app", app);
  console.log("account", account);

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Deployed Contract
            </h2>
          </div>
        </div>
      </div>
      <BalanceWidget amount={get(account, "val.amount", "")} />
      <StateWidget
        escrowAmount={get(app, "val.amount", "")}
        renter={get(app, "val.renter", "")}
        owner={get(app, "val.owner", "")}
        arbiter={get(app, "val.arbiter", "")}
      />
      <ActionsWidget typedClient={typedClient} />
    </DashboardLayout>
  );
}
