"use client";

import { Line } from "react-chartjs-2";
import "../../lib/Chart.ts";

const data = {
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
  return (
    <div className="absolute inset-0">
      <Line data={data} options={options} />
    </div>
  );
}
