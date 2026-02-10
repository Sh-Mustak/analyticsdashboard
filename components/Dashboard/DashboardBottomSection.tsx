import OrdersBarChart from "../Charts/OrdersBarChart";
import ActiveCustomers from "./ActiveCustomer";


export default function DashboardBottomSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      {/* Weekly Orders Bar Chart */}
      <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
              Weekly Orders
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Average weekly performance
            </p>
          </div>
        </div>
        <OrdersBarChart />
      </div>
      {/* Top Users Table  */}
      <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
            Active Customers
          </h4>
          <button className="text-xs text-primary font-bold hover:underline">
            View All
          </button>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <ActiveCustomers name="Shahriar Mustak" usertype="Premium" avatar="/man-user-color-icon.svg" />
          <ActiveCustomers name="Tuba Islam" usertype="Enterprise" avatar="/business-women-icon.svg" />
          <ActiveCustomers name="Riad Hasan" usertype="Premium" avatar="/man-user-color-icon.svg" />
        
        </div>
      </div>
    </div>
  );
}
