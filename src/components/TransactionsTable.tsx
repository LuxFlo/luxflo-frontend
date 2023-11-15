import get from "lodash.get";
import { useRouter } from "next/router";

interface P {
  activeAddress: string | undefined;
  txns: any;
}

export function TransactionsTable(p: P) {
  let { txns, activeAddress } = p;
  const router = useRouter();

  console.log("txns", txns);

  const transactions = txns?.transactions?.slice(0, 10);

  console.log("transactions", transactions);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-2 text-sm text-gray-700">
            {activeAddress && activeAddress?.substring(0, 8) + "..."}
          </p>
        </div>
      </div>
      <div className="-mx-4 mt-4 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Round Time
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                ID
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Type
              </th>
              {/* <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Preview
              </th> */}
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {transactions.map((txn: any) => {
              return (
                <tr key={txn.id}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                    <p>
                      <time
                        dateTime={new Date(
                          txn["round-time"] * 1000
                        ).toLocaleString()}
                      >
                        {new Date(txn["round-time"] * 1000).toLocaleString()}
                      </time>
                    </p>
                    <dl className="font-normal lg:hidden">
                      <dt className="sr-only">ID</dt>
                      <dd className="mt-1 truncate text-gray-700">{`${txn.id.slice(
                        0,
                        8
                      )}...`}</dd>
                      <dt className="sr-only sm:hidden">Type</dt>
                      <dd className="mt-1 truncate text-gray-500 sm:hidden">
                        {txn["tx-type"]}
                      </dd>
                    </dl>
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {`${txn.id.slice(0, 8)}...`}
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    {txn["tx-type"]}
                  </td>
                  <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <button
                      className="text-blue-600 hover:text-blue-900"
                      onClick={() => {
                        router.push(`/`);
                      }}
                    >
                      View
                      <span className="sr-only">{txn.id}</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
