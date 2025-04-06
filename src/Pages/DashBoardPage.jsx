import { ChartColumn, CircuitBoard } from "lucide-react";
import SharpCard from "@Components/BodyCard";
import DashBoardItems from "@Components/DashboardItems/DashboardItems1";
import ApexCharts from "@Components/Charts/ApexCharts";
import ApexPieChart from "@Components/Charts/ApexPieChart";

export default function DashBoardPage() {
  return (
    <div className="space-y-6 px-4 py-6 md:px-8 lg:px-10 xl:px-16">
      <SharpCard
        title="Dashboard 1"
        Icon={CircuitBoard}
        classes="shadow-md"
      >
        <DashBoardItems />
      </SharpCard>

      <SharpCard
        title="Apex Charts"
        Icon={ChartColumn}
        classes="shadow-md"
      >
        <div className="space-y-8">
          <ApexCharts
            isBtnRefreshActive
            isBtnFilterActive
            isBtnChartTypeActive
            isBtnExportActive
            isBtnDarkModeActive
            isBtnLabelActive
            isBtnGridActive={false}
            isBtnScaleActive={false}
            isBtnAnimationsActive={false}
          />

          <div className="border-t border-gray-200 dark:border-gray-700" />

          <ApexPieChart
            isBtnRefreshActive
            isBtnFilterActive
            isBtnChartTypeActive={false}
            isBtnExportActive
            isBtnDarkModeActive
            isBtnLabelActive
            isBtnGridActive={false}
            isBtnScaleActive={false}
            isBtnAnimationsActive={false}
          />
        </div>
      </SharpCard>
    </div>
  );
}
