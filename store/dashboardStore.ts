"use client";

import { create } from "zustand";
import api from "../lib/axios.ts";

interface DashboardState {
  data: unknown;
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

      const res = await api.get("/dashboard");

      set({
        data: res.data,
        loading: false,
      });
    } catch (error) {
      set({
        error: "Failed to fetch dashboard data",
        loading: false,
      });
    }
  },
}));
