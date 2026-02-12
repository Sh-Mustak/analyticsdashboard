"use client";

import { useDashboardStore } from "@/store/dashboardStore";
import { Line } from "react-chartjs-2";
import "../../lib/Chart.ts";

const hardCodedData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [
        1200, 1900, 3000, 2500, 3200, 4000, 3800, 4200, 4600, 4800, 5000, 5400,
      ],
      borderColor: "#3b82f6",
      backgroundColor: "#256af4",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: true },
  },
  scales: {
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: {
        color: "#94a3b8",
        font: { size: 11 },
      },
    },
    y: {
      grid: { display: false },
      border: { display: false },
      ticks: {
        color: "#94a3b8",
        font: { size: 11 },
      },
    },
  },
};

export default function RevenueLineChart() {
  const { data} = useDashboardStore((state) => state.data);
  // console.log("Dashboard Store Data:", data);
  let revenueData;
  if (data) {
    revenueData = {
      labels: data.revenue.labels,
      datasets: [
        {
          label: "Revenue",
          data: data.revenue.data,
          borderColor: "#3b82f6",
          backgroundColor: "#256af4",
          tension: 0.4,
        },
      ],
    };
  } else {
    revenueData = hardCodedData;
  }
  // console.log("Revenue Line Chart Data:", revenueData.data, revenueData.labels);
  return (
    <div className="absolute inset-0">
      <Line data={revenueData} options={options} />
    </div>
  );
}
