import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import chartData from "./Data.json";
import ChartControls from "./ChartControls";
import "./ApexCharts.css";
import { CHART_TYPES } from "./ChartTypes";

const FILTER_OPTIONS = [
  "today",
  "weekly",
  "monthly",
  "quarterly",
  "yearly"
];

export default function ApexCharts({
  isBtnLabelActive,
  isBtnExportActive,
  isBtnRefreshActive,
  isBtnFilterActive,
  isBtnChartTypeActive,
  isBtnDarkModeActive,
  isBtnGridActive,
  isBtnScaleActive,
  isBtnAnimationsActive
}) {
  const [timeRange, setTimeRange] = useState(FILTER_OPTIONS[1]);
  const [chartType, setChartType] = useState(CHART_TYPES[0]); // Default to bar or line
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isChartTypeOpen, setIsChartTypeOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [showLabels, setShowLabels] = useState(true);
  const [gridVisible, setGridVisible] = useState(true);
  const [chartScale, setChartScale] = useState(1);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  const regenerateData = () => {
    const filtered = chartData[timeRange];
    return {
      categories: filtered.categories,
      series: filtered.series,
    };
  };

  const { categories, series } = regenerateData();

  const chartOptions = {
    ...chartData.chartOptions,
    chart: {
      ...chartData.chartOptions.chart,
      id: "apex_sales-chart",
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
    xaxis: { categories },
    yaxis: {
      ...chartData.chartOptions.yaxis,
      labels: {
        ...chartData.chartOptions.yaxis?.labels,
        formatter: (value) => `$${value.toLocaleString()}`,
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
      ...chartData.chartOptions.grid,
      show: gridVisible,
    },
    animations: {
      enabled: animationsEnabled,
    },
    scale: {
      enabled: chartScale,
    },
  };

  const pieChartOptions = {
    chart: {
      id: "pie_sales-chart",
      type: "pie",
      toolbar: { show: false },
    },
    labels: categories,
    tooltip: {
      ...chartData.chartOptions.tooltip,
      y: {
        formatter: (value) => `${value.toLocaleString()} units`,
      },
    },
    theme: {
      mode: darkMode ? "dark" : "light",
    },
    dataLabels: {
      enabled: showLabels,
    },
  };

  // Prepare data for pie chart
  const pieChartSeries = series.map((item) => item.data.reduce((a, b) => a + b, 0)); // Aggregate data for pie chart

  return (
    <div className={`apex_sales-container ${darkMode ? "dark" : ""}`}>
      <h2 className="apex_sales-title">Sales Dashboard</h2>

      <ChartControls
        setRefreshKey={setRefreshKey}
        timeRange={timeRange}
        setIsFilterOpen={setIsFilterOpen}
        isFilterOpen={isFilterOpen}
        FILTER_OPTIONS={FILTER_OPTIONS}
        setTimeRange={setTimeRange}
        chartType={chartType}
        setChartType={setChartType}
        setIsChartTypeOpen={setIsChartTypeOpen}
        isChartTypeOpen={isChartTypeOpen}
        CHART_TYPES={CHART_TYPES}
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
          options={chartType === "pie" ? pieChartOptions : chartOptions}
          series={chartType === "pie" ? pieChartSeries : series}
          type={chartType}
          
          height={350}
        />
      </div>
    </div>
  );
}
