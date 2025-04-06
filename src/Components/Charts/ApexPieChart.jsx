import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import chartData from "./Data.json";
import ChartControls from "./ChartControls";
import "./ApexCharts.css";

const FILTER_OPTIONS = [
  "today",
  "weekly",
  "monthly",
  "quarterly",
  "yearly"
];

export default function ApexPieChart({
  isBtnLabelActive,
  isBtnExportActive,
  isBtnRefreshActive,
  isBtnFilterActive,
  isBtnChartTypeActive,
  isBtnDarkModeActive,
  isBtnGridActive,
  isBtnScaleActive,
  isBtnAnimationsActive,
}) {
  const [timeRange, setTimeRange] = useState(FILTER_OPTIONS[0]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [showLabels, setShowLabels] = useState(true);
  const [gridVisible, setGridVisible] = useState(true);
  const [chartScale, setChartScale] = useState(1);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // Regenerate data based on selected time range
  const regenerateData = () => {
    const filtered = chartData[timeRange];
    return {
      categories: filtered.categories,
      series: filtered.series,
    };
  };

  const { categories, series } = regenerateData();

  // Pie chart specific data
  const pieChartSeries = series[0].data;

  const chartOptions = {
    ...chartData.chartOptions,
    chart: {
      ...chartData.chartOptions.chart,
      id: "apex_pie-chart",
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
      },
    },
    tooltip: {
      ...chartData.chartOptions.tooltip,
      y: {
        formatter: (value) => `$${value.toLocaleString()}`,
      },
    },
    dataLabels: {
      enabled: showLabels,
    },
    theme: {
      mode: darkMode ? "dark" : "light",
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          size: "65%", // Donut chart
        },
      },
    },
    grid: {
      show: gridVisible,
    },
    animations: {
      enabled: animationsEnabled,
    },
  };

  return (
    <div className={`apex_sales-container ${darkMode ? "dark" : ""}`}>

      <ChartControls
        setRefreshKey={setRefreshKey}
        timeRange={timeRange}
        setIsFilterOpen={setIsFilterOpen}
        isFilterOpen={isFilterOpen}
        FILTER_OPTIONS={FILTER_OPTIONS}
        setTimeRange={setTimeRange}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        showLabels={showLabels}
        setShowLabels={setShowLabels}
        isBtnLabelActive={isBtnLabelActive}
        isBtnExportActive={isBtnExportActive}
        isBtnRefreshActive={isBtnRefreshActive}
        isBtnFilterActive={isBtnFilterActive}
        isBtnChartTypeActive={isBtnChartTypeActive}
        isBtnDarkModeActive={isBtnDarkModeActive}
        chartScale={chartScale}
        animationsEnabled={animationsEnabled}
        isBtnAnimationsActive={isBtnAnimationsActive}
        setGridVisible={setGridVisible}
        gridVisible={gridVisible}
        setChartScale={setChartScale}
        setAnimationsEnabled={setAnimationsEnabled}
        isBtnGridActive={isBtnGridActive}
        isBtnScaleActive={isBtnScaleActive}
        regenerateData={regenerateData()}
      />

      <div className="apex_sales-chart">
        <ReactApexChart
          key={refreshKey}
          options={chartOptions}
          series={pieChartSeries} // Pie chart uses series directly
          type="pie" // Specify the type as pie
          height={350}
        />
      </div>
    </div>
  );
};
