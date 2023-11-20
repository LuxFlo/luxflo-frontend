"use client";

import moment from "moment-timezone";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Datetime from "react-datetime";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { infoToast } from "@/utils/toasts";
import { EscrowClient } from "../contracts/EscrowClient";
import {
  SendTransactionResult,
  TransactionToSign,
  SendTransactionFrom,
} from "@algorandfoundation/algokit-utils/types/transaction";
import { useWallet } from "@txnlab/use-wallet";
import { errorReporter } from "@/utils/error/reporter";

interface P {
  typedClient: EscrowClient;
  // activeAddress: string;
}

export default function ContractForm(p: P) {
  const { activeAddress, signer } = useWallet();
  const sender = { signer, addr: activeAddress! };

  console.log("!!! activeAddress !!!", activeAddress);

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
      renter: "",
      owner: "",
      arbiter: "",
      endDate: moment().add("0", "m"),
      termsHash: "",
    },
  });

  const inputElEndDate = useRef<Datetime>(null);

  const onSubmit = async (data: any) => {
    try {
      const { renter, owner, arbiter, endDate } = data;

      const endDateUnixMilliseconds = endDate.unix() * 1000;

      console.log("data", data);
      console.log("endDate", endDate);

      infoToast("Deploying Contract...");

      console.log(`Calling createApplication`);
      await p.typedClient.create.createApplication(
        {
          asa: 1,
          renter: "ZBACV42L6NLCTRCEADAWWKHB3FWXDDQLUFG4RVC5ATBUBQZWG4ZHZPFTFM",
          owner: "ZBACV42L6NLCTRCEADAWWKHB3FWXDDQLUFG4RVC5ATBUBQZWG4ZHZPFTFM",
          arbiter: "ZBACV42L6NLCTRCEADAWWKHB3FWXDDQLUFG4RVC5ATBUBQZWG4ZHZPFTFM",
          amount: 100,
          terms: "asdf",
          contractLength: 100,
        },
        { sender }
      );

      const { appId } = await p.typedClient.appClient.getAppReference();

      console.log("appId", appId);
    } catch (e) {
      errorReporter(e);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-0 lg:px-8">
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-5xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="renter"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Renter
                </label>
                <div className="mt-2">
                  <input
                    {...register("renter", {
                      // required: true,
                    })}
                    id="renter"
                    name="renter"
                    type="text"
                    autoComplete="renter"
                    placeholder={"Renter Address"}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
                      errors["renter"] && "ring-red-700 focus:ring-red-500"
                    }`}
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="seller"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Owner
                </label>
                <div className="mt-2">
                  <input
                    {...register("owner", {
                      // required: true,
                    })}
                    id="owner"
                    name="owner"
                    type="owner"
                    autoComplete="owner"
                    placeholder={"Owner Address"}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
                      errors["owner"] && "ring-red-700 focus:ring-red-500"
                    }`}
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="arbiter"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Arbiter
                </label>
                <div className="mt-2">
                  <input
                    {...register("arbiter", {
                      // required: true,
                    })}
                    id="arbiter"
                    name="arbiter"
                    type="text"
                    autoComplete="arbiter"
                    placeholder={"Arbiter Address"}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
                      errors["arbiter"] && "ring-red-700 focus:ring-red-500"
                    }`}
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="termsHash"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Hash of agreement terms
              </label>
              <div className="mt-2">
                <input
                  {...register("termsHash", {
                    // required: true,
                  })}
                  type="text"
                  name="termsHash"
                  id="termsHash"
                  placeholder={"Hash of agreement terms"}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            {/*  */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="endDate"
                className="flex text-sm font-medium leading-6 text-gray-900"
              >
                End Date&nbsp;
                <ArrowPathIcon
                  className="inline h-5 w-5 cursor-pointer"
                  onClick={() => {
                    setValue("endDate", moment());
                  }}
                />
              </label>
              <div className="mt-2">
                <Datetime
                  timeFormat={true}
                  input={true}
                  ref={inputElEndDate}
                  initialValue={getValues("endDate")}
                  onChange={(e: any) => {
                    console.log("--- e.unix() ---", e.unix());
                    e = moment(e.unix() * 1000);
                    setValue("endDate", e);
                  }}
                  renderInput={(props, openCalendar, closeCalendar) => (
                    <input
                      {...register("endDate", {
                        required: true,
                      })}
                      className={`max-w-lg block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${
                        errors["endDate"] && "ring-red-700 focus:ring-red-500"
                      }`}
                      type="text"
                      inputMode="none"
                      value={getValues("endDate").toString()}
                      placeholder="mm/dd/yyyy"
                      onFocus={(e: any) => {
                        openCalendar();
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <div>
              <button className="flex w-full justify-center rounded-md bg-[#00dc94] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-[#00dc94] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Deploy
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
