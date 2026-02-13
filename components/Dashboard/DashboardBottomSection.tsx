import { useDashboardStore } from "@/store/dashboardStore";
import OrdersBarChart from "../Charts/OrdersBarChart";
import ActiveCustomers from "./ActiveCustomer";


export default function DashboardBottomSection() {
  const data = useDashboardStore((state) => state.data);
  const loading = useDashboardStore((state) => state.loading);
  const error = useDashboardStore((state) => state.error);

  console.log("DashboardBottomSection Data:", data); // Debugging log
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
          {loading && <p className="text-sm text-slate-500 dark:text-slate-400">Loading...</p>}
          {error && <p className="text-sm text-red-500">{error}</p>}
          {data && data.customers.map((customer) => (
            <ActiveCustomers
            key={customer.id}
            name={customer.name}
            usertype={customer.type}
            avatar={customer.avatar}
            value={customer.value}
            alt={`${customer.name}'s profile picture`}
          />
          ))}
          
        </div>
      </div>
    </div>
  );
}
