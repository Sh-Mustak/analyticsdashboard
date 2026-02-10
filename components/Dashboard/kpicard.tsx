export default function KpiCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <span className="flex items-center text-green-600 dark:text-green-400 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm mr-1">
              trending_up
            </span>
            12%
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          Total Revenue
        </p>
        <h3 className="text-xl sm:text-2xl font-bold mt-1">$54,230</h3>
        <p className="text-xs text-slate-400 mt-2">Vs. $48,420 last month</p>
      </div>
      <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600">
            <span className="material-symbols-outlined">person_add</span>
          </div>
          <span className="flex items-center text-green-600 dark:text-green-400 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm mr-1">
              trending_up
            </span>
            5%
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          Total Users
        </p>
        <h3 className="text-xl sm:text-2xl font-bold mt-1">1,245</h3>
        <p className="text-xs text-slate-400 mt-2">Vs. 1,185 last month</p>
      </div>
      <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600">
            <span className="material-symbols-outlined">inventory_2</span>
          </div>
          <span className="flex items-center text-red-600 dark:text-red-400 text-xs font-bold bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm mr-1">
              trending_down
            </span>
            2%
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          Orders
        </p>
        <h3 className="text-xl sm:text-2xl font-bold mt-1">342</h3>
        <p className="text-xs text-slate-400 mt-2">Vs. 349 last month</p>
      </div>
      <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-teal-50 dark:bg-teal-900/20 rounded-lg text-teal-600">
            <span className="material-symbols-outlined">query_stats</span>
          </div>
          <span className="flex items-center text-green-600 dark:text-green-400 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
            <span className="material-symbols-outlined text-sm mr-1">
              trending_up
            </span>
            0.5%
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          Conversion Rate
        </p>
        <h3 className="text-xl sm:text-2xl font-bold mt-1">4.3%</h3>
        <p className="text-xs text-slate-400 mt-2">Vs. 3.8% last month</p>
      </div>
    </div>
  );
}
