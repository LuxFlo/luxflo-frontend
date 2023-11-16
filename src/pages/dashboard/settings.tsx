import SettingsForm from "@/components/SettingsForm";
import DashboardLayout from "@/layouts/dashboardLayout";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Settings
            </h2>
          </div>
        </div>
      </div>
      <SettingsForm />
    </DashboardLayout>
  );
}
