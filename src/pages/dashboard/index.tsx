import BlockchainHealthWidgetGroup from "@/components/BlockchainHealthWidgetGroup";
import { useAppContext } from "@/context/AppContext";
import DashboardLayout from "@/layouts/dashboardLayout";
import { AlgorandClient } from "@/services/algorand_client";
import { errorToast } from "@/utils/toasts";
import { PeraWalletConnect } from "@perawallet/connect";
import { useEffect, useState } from "react";

const peraWallet = new PeraWalletConnect();

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
    // Reconnect to the session when the component is mounted
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        peraWallet?.connector?.on("disconnect", handleDisconnectWalletClick);

        if (accounts.length) {
          setAccountAddress(accounts[0]);
        }
      })
      .catch((e) => console.log(e));
  }, []);

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
        accountAddress={accountAddress}
      />
    );
  } else {
    jsx = "?";
  }

  return (
    <>
      <DashboardLayout
        isConnectedToPeraWallet={isConnectedToPeraWallet}
        handleDisconnectWalletClick={handleDisconnectWalletClick}
        handleConnectWalletClick={handleConnectWalletClick}
      >
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Blockchain Health
              </h2>
            </div>
          </div>
        </div>
        {jsx}
      </DashboardLayout>
    </>
  );
}
