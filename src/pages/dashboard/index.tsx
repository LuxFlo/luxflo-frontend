import BlockchainHealthWidgetGroup from "@/components/BlockchainHealthWidgetGroup";
import { useAppContext } from "@/context/AppContext";
import DashboardLayout from "@/layouts/dashboardLayout";
import { AlgorandClient } from "@/services/algorand_client";
import { errorToast } from "@/utils/toasts";
import { useWallet } from "@txnlab/use-wallet";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { state, dispatch } = useAppContext();
  const [statusAlgorand, setStatusAlgorand] = useState<{
    l: boolean;
    v: any;
    e: any;
  }>({
    v: "...",
    l: true,
    e: undefined,
  });

  const { activeAddress } = useWallet();

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await AlgorandClient.getAlgod(state.network)
          .status()
          .do();

        setStatusAlgorand({
          v: response,
          l: false,
          e: null,
        });
      } catch (e) {
        console.error("e", e);
        errorToast("Error occurred while fetching network status");
        setStatusAlgorand({
          v: null,
          l: false,
          e: e,
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [state.network]);

  let jsx = null;
  if (statusAlgorand.l) {
    jsx = "...";
  } else if (statusAlgorand.v) {
    jsx = (
      <BlockchainHealthWidgetGroup
        healthResponse={statusAlgorand.v}
        network={state.network}
        accountAddress={activeAddress!}
      />
    );
  } else {
    jsx = "Error";
  }

  return (
    <>
      <DashboardLayout>
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Dashboard
              </h2>
            </div>
          </div>
        </div>
        {jsx}
      </DashboardLayout>
    </>
  );
}
