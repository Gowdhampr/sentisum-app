"use client";

import DashboardGrid from "@/components/organisms/DashboardGrid/DashboardGrid";
import DashboardHeader from "@/components/organisms/DashboardGrid/DashboardHeader";

export default function Home() {
  return (
    <div className="">
      {/* Header - Temp copied from Sentisum app */}
      <DashboardHeader />

      <DashboardGrid />
    </div>
  );
}
