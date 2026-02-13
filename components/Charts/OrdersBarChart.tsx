"use client";

import { useDashboardStore } from "@/store/dashboardStore";
import { Bar } from "react-chartjs-2";
import "../../lib/Chart";

const defaultData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Orders",
      data: [120, 150, 180, 140, 200, 220, 210],
      backgroundColor: "#22c55e",
      borderRadius: 6, // optional: smoother bars
    },
  ],
};

const options = {
  responsive: true,
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

export default function OrdersBarChart() {
  const data = useDashboardStore((state) => state.data);
  console.log("Orders Data:", data); // Debugging log
  let chartData;
  if (data) {
    chartData = {
      labels: data.orders.labels,
      datasets: [
        {
          label: "Orders",
          data: data.orders.data,
          backgroundColor: "#22c55e",
          borderRadius: 6, // optional: smoother bars
        },
      ],
    };
  } else {
    chartData = defaultData;
  }
  return <Bar data={chartData} options={options} />;
}
