"use client";

import "../../lib/Chart.ts";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      label: "Revenue",
      data: [1200, 1900, 3000, 2500, 3200, 4000, 3800, 4200, 4600, 4800, 5000, 5400],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59,130,246,0.2)",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // ⭐ IMPORTANT
  plugins: {
    legend: { display: true },
  },
};

export default function RevenueLineChart() {
  return (
    <div className="absolute inset-0">
      <Line data={data} options={options} />
    </div>
  );
}
