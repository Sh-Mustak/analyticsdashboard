export default function Filterbar() {
  return (
    
    <div className="flex flex-col gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center gap-2">
        <h2 className="text-base sm:text-lg font-bold">Analytics Overview</h2>
        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] font-bold rounded uppercase tracking-wide">
          Live
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
        <div className="flex items-center bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-2 border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
          <span className="material-symbols-outlined text-lg text-slate-500 mr-2">
            calendar_today
          </span>
          <span className="text-sm font-medium flex-1">Last 30 Days</span>
          <span className="material-symbols-outlined text-lg text-slate-400">
            expand_more
          </span>
        </div>
        <div className="flex items-center bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-2 border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
          <span className="material-symbols-outlined text-lg text-slate-500 mr-2">
            group
          </span>
          <span className="text-sm font-medium flex-1">User Type: All</span>
          <span className="material-symbols-outlined text-lg text-slate-400">
            expand_more
          </span>
        </div>
        <button className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-bold shadow-sm shadow-primary/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-lg">download</span>
          Export
        </button>
      </div>
    </div>
  );
}
