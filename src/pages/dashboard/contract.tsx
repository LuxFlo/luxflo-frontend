import ContractForm from "@/components/ContractForm";
import DashboardLayout from "@/layouts/dashboardLayout";
import { PeraWalletConnect } from "@perawallet/connect";
import { useEffect, useState } from "react";

const peraWallet = new PeraWalletConnect();

export default function Contract() {
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
      <ContractForm />
    </DashboardLayout>
  );
}
