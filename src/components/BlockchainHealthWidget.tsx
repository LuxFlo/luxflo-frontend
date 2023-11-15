import React from "react";

interface P {
  healthResponse: any;
}

export function BlockchainHealthWidget(p: P) {
  const { healthResponse } = p;

  console.log("healthResponse", healthResponse);

  const stats = [
    { id: 1, name: "Transactions every 24 hours", value: "44 million" },
    { id: 2, name: "Assets under holding", value: "$119 trillion" },
    { id: 3, name: "New users annually", value: "46,000" },
  ];

  return (
    <>
      {/* <Row className="justify-content-md-center py-4">
          <Col xs={12} sm={6} xl={4} className="mb-4">
            <BlockchainStatWidget
              field="Last Block"
              value={statusAlgorand?.val && statusAlgorand?.val["last-round"]}
              loading={statusAlgorand?.loading}
            />
          </Col>
          <Col xs={12} sm={6} xl={4} className="mb-4">
            <BlockchainStatWidget
              field="Last Block Time"
              value={
                statusAlgorand?.val &&
                statusAlgorand?.val["time-since-last-round"]
                  ? new Date().toLocaleTimeString()
                  : ""
              }
              loading={statusAlgorand?.loading}
            />
          </Col>
        </Row> */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-1">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {healthResponse["last-round"]}
              </dd>
              <dt className="text-2xl leading-7 text-gray-600">Last Round</dt>
            </div>

            {/* <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Last Time
              </dd>
              <dt className="text-2xl leading-7 text-gray-600">
                {new Date(
                  healthResponse["time-since-last-round"] * 1000
                ).toLocaleString()}
              </dt>
            </div> */}
          </dl>
        </div>
      </div>
    </>
  );
}
