import DashboardBottomSection from "@/components/Dashboard/DashboardBottomSection";
import DashboardChartsSection from "@/components/Dashboard/DashboardChartsSection";
import Filterbar from "@/components/Dashboard/Filterbar";
import KpiCard from "@/components/Dashboard/kpicard";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-row bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content  */}
      <main className="flex-1 lg:ml-64 min-h-screen flex flex-col w-full">
        {/* Header  */}
        <Header />
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8 max-w-[1400px] mx-auto w-full">
          {/* Filterbar */}
          <Filterbar />
          {/* KPI card */}
          <KpiCard />
          {/* Dashboard Charts Section */}
          <DashboardChartsSection />
          <DashboardBottomSection />
        </div>
      </main>
    </div>
  );
}
