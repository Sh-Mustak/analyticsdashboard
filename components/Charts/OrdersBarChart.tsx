"use client";

import { Bar } from "react-chartjs-2";
import "../../lib/Chart";

const data = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      label: "Orders",
      data: [120, 150, 180, 140, 200, 220, 210, 240, 260, 280, 300, 320],
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
      grid: { display: false }, // ❌ remove grid
      border: { display: false },
      ticks: {
        color: "#94a3b8",
        font: { size: 11 },
      },
    },
    y: {
      grid: { display: false }, // ❌ remove grid
      border: { display: false },
      ticks: {
        color: "#94a3b8",
        font: { size: 11 },
      },
    },
  },
};

export default function OrdersBarChart() {
  return <Bar data={data} options={options} />;
}
