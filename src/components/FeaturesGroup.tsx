export default function FeaturesGroup() {
  return (
    <section className="py-12 space-y-8 text-center px-24">
      <h2 className="text-3xl font-bold">Key Features</h2>
      <p className="text-lg text-gray-600">
        Discover what makes our platform stand out from the crowd
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 items-center">
        <div className="flex flex-col items-center space-y-4">
          <svg
            className=" h-8 w-8 text-yellow-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
            <path d="m13 12-3 5h4l-3 5" />
          </svg>
          <h3 className="text-xl font-semibold">A.I. Arbitration</h3>
          <p className="text-gray-600">
            Arbitration assistance provided by A.I.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <svg
            className=" h-8 w-8 text-green-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <h3 className="text-xl font-semibold">Peer-to-Peer Escrow</h3>
          <p className="text-gray-600">No middlemen</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <svg
            className=" h-8 w-8 text-blue-600"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          <h3 className="text-xl font-semibold">
            All ASA&apos;s are supported
          </h3>
          <p className="text-gray-600">That includes USDCa</p>
        </div>
      </div>
    </section>
  );
}
