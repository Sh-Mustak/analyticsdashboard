import { DashboardResponse } from "@/types/dashboard";
import { create } from "zustand";
import api from "../lib/axios";

interface DashboardState {
  data: DashboardResponse | null;
  loading: boolean;
  error: string | null;
  fetchDashboard: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchDashboard: async () => {
    try {
      set({ loading: true, error: null });

      const res = await api.get<DashboardResponse>("/dashboard");

      set({
        data: res.data,
        loading: false,
      });
    } catch {
      set({
        error: "Failed to fetch dashboard data",
        loading: false,
      });
    }
  },
}));
