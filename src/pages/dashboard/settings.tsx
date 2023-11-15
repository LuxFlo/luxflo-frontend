import SettingsForm from "@/components/SettingsForm";
import DashboardLayout from "@/layouts/dashboardLayout";
import { PeraWalletConnect } from "@perawallet/connect";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const peraWallet = new PeraWalletConnect();

export default function Settings() {
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

  return (
    <DashboardLayout
      isConnectedToPeraWallet={isConnectedToPeraWallet}
      handleDisconnectWalletClick={handleDisconnectWalletClick}
      handleConnectWalletClick={handleConnectWalletClick}
    >
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Settings
            </h2>
          </div>
        </div>
      </div>
      <SettingsForm />
    </DashboardLayout>
  );
}
