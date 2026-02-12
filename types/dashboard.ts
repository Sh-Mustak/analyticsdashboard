export interface DashboardResponse {
  kpis: {
    totalRevenue: number;
    totalOrders: number;
    activeUsers: number;
    conversionRate: number;
  };
  revenue: {
    labels: string[];
    data: number[];
  };
  orders: {
    labels: string[];
    data: number[];
  };
  customers: {
    id: number;
    name: string;
    type: string;
    value: string;
    avatar: string;
  }[];
}
