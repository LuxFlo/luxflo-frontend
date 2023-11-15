import { BlockchainHealthWidget } from "@/components/BlockchainHealthWidget";
import DashboardLayout from "@/layouts/dashboardLayout";
import { useEffect, useState } from "react";
import { peraWallet, showErrorToast } from ".";

export default function Dashboard() {
  const [statusAlgorand, setStatusAlgorand] = useState<any>({
    val: "...",
    loading: true,
    error: undefined,
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
        // setStatus({
        //   val: status.val,
        //   loading: true,
        //   error: null,
        // });
        const response = await AlgorandClient.getAlgod(
          settings.selectedAlgorandNetwork
        )
          .status()
          .do();

        setStatusAlgorand({
          val: response,
          loading: false,
          error: null,
        });
      } catch (e) {
        console.error("e", e);

        showErrorToast("Error occurred while fetching network status");

        if (settings.selectedBlockchain === "Ethereum") {
          setStatusEthereum({
            val: null,
            loading: false,
            error: e,
          });
        } else if (settings.selectedBlockchain === "Algorand") {
          setStatusAlgorand({
            val: null,
            loading: false,
            error: e,
          });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  });

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

        <BlockchainHealthWidget />
      </DashboardLayout>
    </>
  );
}
