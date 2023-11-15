import React from "react";

interface P {
  healthResponse: any;
  network: string;
  accountAddress: string;
}

export default function BlockchainHealthWidgetGroup(p: P) {
  const { healthResponse, network, accountAddress } = p;
  console.log("healthResponse", healthResponse);

  return (
    <section className="flex justify-center items-center space-x-4 my-4">
      <div className="w-64 h-24 bg-white dark:bg-zinc-800 shadow-lg rounded-md transition-all transform hover:scale-105 hover:border hover:border-zinc-200 dark:hover:border-zinc-700 p-4 flex flex-col justify-center items-center my-4">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Last Round
        </h2>
        <p className="text-base text-zinc-600 dark:text-zinc-300">
          {healthResponse["last-round"]}
        </p>
      </div>
      <div className="w-64 h-24 bg-white dark:bg-zinc-800 shadow-lg rounded-md transition-all transform hover:scale-105 hover:border hover:border-zinc-200 dark:hover:border-zinc-700 p-4 flex flex-col justify-center items-center my-4">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Network
        </h2>
        <p className="text-base text-zinc-600 dark:text-zinc-300">{network}</p>
      </div>
      <div className="w-64 h-24 bg-white dark:bg-zinc-800 shadow-lg rounded-md transition-all transform hover:scale-105 hover:border hover:border-zinc-200 dark:hover:border-zinc-700 p-4 flex flex-col justify-center items-center my-4">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Connected Account
        </h2>
        <p className="text-base text-zinc-600 dark:text-zinc-300">
          {accountAddress
            ? `${accountAddress?.substring(0, 8)}...`
            : "No connected account"}
        </p>
      </div>
    </section>
  );
}
