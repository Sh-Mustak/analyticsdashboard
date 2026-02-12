import { useDashboardStore } from "@/store/dashboardStore";
import { useEffect } from "react";
import KpiCard from "./kpiCard";

export default function KpiOverview() {
  const { data, loading, error, fetchDashboard } = useDashboardStore();

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!data) return null;

  const { activeUsers, totalRevenue, totalOrders, conversionRate } = data.kpis;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <KpiCard
        title="Total Revenue"
        value={totalRevenue}
        icon="payments"
        percentage="12%"
        trend="up"
        compareText="Vs. $48,420 last month"
        iconBg="bg-blue-50 dark:bg-blue-900/20"
        iconColor="text-primary"
      />

      <KpiCard
        title="Total Users"
        value={activeUsers}
        icon="person_add"
        percentage="5%"
        trend="up"
        compareText="Vs. 1,185 last month"
        iconBg="bg-purple-50 dark:bg-purple-900/20"
        iconColor="text-purple-600"
      />

      <KpiCard
        title="Orders"
        value={totalOrders}
        icon="inventory_2"
        percentage="2%"
        trend="down"
        compareText="Vs. 349 last month"
        iconBg="bg-orange-50 dark:bg-orange-900/20"
        iconColor="text-orange-600"
      />

      <KpiCard
        title="Conversion Rate"
        value={conversionRate}
        icon="query_stats"
        percentage="0.5%"
        trend="up"
        compareText="Vs. 3.8% last month"
        iconBg="bg-teal-50 dark:bg-teal-900/20"
        iconColor="text-teal-600"
      />
    </div>
  );
}
