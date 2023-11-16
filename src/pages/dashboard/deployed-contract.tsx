import { ActionsWidget } from "@/components/DeployedContractComponents/ActionsWidget";
import { BalanceWidget } from "@/components/DeployedContractComponents/BalanceWidget";
import { PartiesWidget } from "@/components/DeployedContractComponents/PartiesWidget";
import DashboardLayout from "@/layouts/dashboardLayout";
import { useRouter } from "next/router";
import React from "react";

export default function DeployedContract() {
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const appId = searchParams.get("app-id") || "";

  console.log("appId", appId);

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Deployed Contract
            </h2>
          </div>
        </div>
      </div>
      <BalanceWidget />
      <PartiesWidget />
      <ActionsWidget />
    </DashboardLayout>
  );
}
