"use client";

import { Pie } from "react-chartjs-2";
import "../../lib/Chart.ts";

const data = {
  labels: ["Free", "Premium", "Enterprise"],
  datasets: [
    {
      data: [700, 400, 145],
      backgroundColor: ["#60a5fa", "#34d399", "#fbbf24"],
    },
  ],
};

export default function UserPieChart() {
  return <Pie data={data} />;
}
