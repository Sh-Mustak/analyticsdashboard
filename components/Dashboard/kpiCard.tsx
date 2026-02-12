export default function KpiCard({ title, value, icon, percentage, trend, compareText, iconBg, iconColor }) {
    return (
        <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2 ${iconBg} rounded-lg ${iconColor}`}>
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <span className={`flex items-center ${trend === "down" ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"} text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full`}>
            <span className={trend === "down" ? "material-symbols-outlined text-sm mr-1 text-red-500" : "material-symbols-outlined text-sm mr-1 text-green-500"}>
              {trend === "up" ? "trending_up" : "trending_down"}
            </span>
            {percentage}
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
         {title}
        </p>
        <h3 className="text-xl sm:text-2xl font-bold mt-1">${value}</h3>
        <p className="text-xs text-slate-400 mt-2">{compareText}</p>
      </div>
    );
}