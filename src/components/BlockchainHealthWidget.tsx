import React from "react";

interface P {
  healthResponse: any;
  network: string;
  accountAddress: string;
}

export function BlockchainHealthWidget(p: P) {
  const { healthResponse, network, accountAddress } = p;

  console.log("healthResponse", healthResponse);

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-1">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {healthResponse["last-round"]}
              </dd>
              <dt className="text-2xl leading-7 text-gray-600">Last Round</dt>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-2xl leading-7 text-gray-600">Network</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {network}
              </dd>
            </div>

            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-2xl leading-7 text-gray-600">
                Connected Account
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {accountAddress
                  ? `${accountAddress?.substring(
                      0,
                      4
                    )}...${accountAddress?.substring(
                      accountAddress?.length - 4
                    )}`
                  : "No connected account"}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
