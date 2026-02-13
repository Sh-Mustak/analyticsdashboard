import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    kpis: {
      totalRevenue: 54200,
      totalOrders: 1280,
      activeUsers: 312,
      conversionRate: 3.6,
    },

    revenue: {
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
      data: [
        1200, 1900, 3000, 2500, 3200, 4000, 3800, 4200, 4600, 4800, 5000, 5400,
      ],
    },

    orders: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [120, 150, 180, 140, 200, 160, 100],
    },

    customers: [
      {
        id: 1,
        name: "Shahriar Mustak",
        type: "Premium",
        value: "$1,240",
        avatar: "/man-user-color-icon.svg",
      },
      {
        id: 2,
        name: "Tuba Islam",
        type: "Enterprise",
        value: "$2,500",
        avatar: "/business-women-icon.svg",
      },
      {
        id: 3,
        name: "Riad Hasan",
        type: "Premium",
        value: "$980",
        avatar: "/man-user-color-icon.svg",
      },
    ],
  });
}
