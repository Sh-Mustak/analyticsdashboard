export default function KpiCardSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 w-10 h-10" />
        <div className="h-6 w-16 rounded-full bg-slate-200 dark:bg-slate-700" />
      </div>
      <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
      <div className="h-6 w-20 bg-slate-300 dark:bg-slate-600 rounded mb-3" />
      <div className="h-3 w-32 bg-slate-200 dark:bg-slate-700 rounded" />
    </div>
  );
}
