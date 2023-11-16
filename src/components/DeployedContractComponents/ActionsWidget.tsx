import { EscrowClient } from "@/contracts/EscrowClient";
import { infoToast } from "@/utils/toasts";
import { useWallet } from "@txnlab/use-wallet";
import React from "react";

interface P {
  typedClient: EscrowClient;
}

export const ActionsWidget = (p: P) => {
  const { activeAddress, signer } = useWallet();
  const sender = { signer, addr: activeAddress! };

  return (
    <div className=" bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="rounded-2xl flex bg-white p-6 flex-col space-y-5"
          id="widget"
        >
          <div>
            <p className="text-lg font-semibold">Actions</p>
          </div>

          <div className="flex space-x-5 items-center">
            <button
              onClick={async () => {
                infoToast("Get Parties");
                console.log(`Calling getParties`);
                const resp = await p.typedClient.getParties({}, { sender });
                console.log("resp", resp);
              }}
              className="rounded-lg bg-[#00dc94] text-black text-sm p-2 px-6 transform hover:scale-105 duration-300"
            >
              Get Parties
            </button>
            <button
              onClick={async () => {
                infoToast("Owner Requests Arbitration");
                const resp = await p.typedClient.ownerArbitration(
                  {},
                  { sender }
                );
                console.log("resp", resp);
              }}
              className="rounded-lg bg-[#00dc94] text-black text-sm p-2 px-6 transform hover:scale-105 duration-300"
            >
              Owner Requests Arbitration
            </button>
            <button
              onClick={async () => {
                infoToast("Renter Requests Arbitration");
                const resp = await p.typedClient.renterArbitration(
                  {},
                  { sender }
                );
                console.log("resp", resp);
              }}
              className="rounded-lg bg-[#00dc94] text-black text-sm p-2 px-6 transform hover:scale-105 duration-300"
            >
              Renter Requests Arbitration
            </button>
            <button
              onClick={async () => {
                infoToast("Owner Withdraw Balance");
                const resp = await p.typedClient.ownerWithdraw({}, { sender });
                console.log("resp", resp);
              }}
              className="rounded-lg bg-[#00dc94] text-black text-sm p-2 px-6 transform hover:scale-105 duration-300"
            >
              Owner Withdraw Balance
            </button>
            <button
              onClick={async () => {
                infoToast("Arbiter Withdraw Balance");
                const resp = await p.typedClient.arbiterWithdraw(
                  {},
                  { sender }
                );
                console.log("resp", resp);
              }}
              className="rounded-lg bg-[#00dc94] text-black text-sm p-2 px-6 transform hover:scale-105 duration-300"
            >
              Arbiter Withdraw Balance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
