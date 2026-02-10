import RevenueLineChart from "../Charts/RevenueLineChart";
import UserPieChart from "../Charts/UserPieChart";

export default function DashboardChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      {/* Revenue Line Chart */}
      <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
              Revenue Over Time
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Monthly revenue breakdown
            </p>
          </div>
          <select className="text-xs bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-1 px-2 focus:ring-primary/20">
            <option>2023 Monthly</option>
            <option>2022 Monthly</option>
          </select>
        </div>
        <div className="h-48 sm:h-64 w-full relative">
          <RevenueLineChart />
        </div>
      </div>

      {/* User Distribution Donut  */}
      <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
        <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-base sm:text-lg">
          User Distribution
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          Tier-based segmentation
        </p>
        <div className="flex-1 flex flex-row items-center justify-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48">
            <UserPieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
