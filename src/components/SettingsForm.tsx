"use client";

import moment from "moment-timezone";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Datetime from "react-datetime";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { useAppContext } from "@/context/AppContext";

export default function SettingsForm() {
  const { state, dispatch } = useAppContext();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm({
    defaultValues: {
      network: state.network,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      dispatch({
        type: "set_network",
        payload: {
          network: data.network,
        },
      });
    } catch (e) {
      //   errorReporter(e);
    }
  };

  useEffect(() => {
    setValue("network", state.network);
  }, [state.network]);

  watch("network");
  console.log("state.network ->", state.network);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-0 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-5xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="network"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Network
                </label>
                <div className="mt-2">
                  <input
                    {...register("network", {
                      required: true,
                    })}
                    id="buyer"
                    name="buyer"
                    type="text"
                    autoComplete="buyer"
                    placeholder={"Buyer Address"}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
                      errors["network"] && "ring-red-700 focus:ring-red-500"
                    }`}
                  />
                </div>
              </div>
            </div> */}
            <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4 sm:py-6">
              <label
                htmlFor="network"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Network
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="max-w-lg">
                  <div className="mt-6 space-x-2 flex justify-between">
                    <select
                      {...register("network")}
                      id="network"
                      name="network"
                      autoComplete="network"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="mainnet">MainNet</option>
                      <option value="testnet">TestNet</option>
                      <option value="localhost">localhost</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="flex justify-center rounded-md bg-[#00dc94] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-[#00dc94] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
