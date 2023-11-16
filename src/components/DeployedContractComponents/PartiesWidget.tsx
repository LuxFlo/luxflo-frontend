import React from "react";

export const PartiesWidget = () => {
  return (
    <div className=" bg-white py-6 flex flex-col justify-center sm:py-12">
      <div
        className="relative py-3 sm:max-w-3xl sm:mx-auto font-inter"
        id="widget"
      >
        <div className="rounded-xl bg-gray-100 p-6 w-96 text-gray-700">
          <div className="font-semibold text-gray-800 mb-4">Parties</div>
          <div className="flex text-sm font-semibold text-gray-600">
            <div className="w-9/12">Role</div>
            <div className="w-3/12">Address</div>
          </div>
          <div className="text-sm flex w-full">
            <div className="flex items-center space-x-2 mt-5 w-9/12">
              <div>Buyer</div>
            </div>
            <div className="flex items-center space-x-2 mt-5 w-3/12 transform hover:scale-105 duration-200 overflow-hidden">
              0xZBACV42L...
            </div>
          </div>
          <div className="text-sm flex w-full">
            <div className="flex items-center space-x-2 mt-5 w-9/12">
              <div>Seller</div>
            </div>
            <div className="flex items-center space-x-2 mt-5 w-3/12 transform hover:scale-105 duration-200 overflow-hidden">
              0xZBACV42L...
            </div>
          </div>
          <div className="text-sm flex w-full">
            <div className="flex items-center space-x-2 mt-5 w-9/12">
              <div>Arbiter</div>
            </div>
            <div className="flex items-center space-x-2 mt-5 w-3/12 transform hover:scale-105 duration-200 overflow-hidden">
              0xZBACV42L...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
