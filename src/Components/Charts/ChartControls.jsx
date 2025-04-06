/* eslint-disable no-undef */
import {
  ChevronDown,
  Download,
  Moon,
  RefreshCcw,
  Sun,
  Layers,
  Zap,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import * as XLSX from "xlsx";

export default function ChartControls({
  setRefreshKey, timeRange, setIsFilterOpen, isFilterOpen, FILTER_OPTIONS,
  setTimeRange, chartType, setChartType, setIsChartTypeOpen, isChartTypeOpen,
  CHART_TYPES, darkMode, setDarkMode, showLabels, setShowLabels,
  isBtnLabelActive, isBtnExportActive, isBtnRefreshActive, isBtnFilterActive, 
  isBtnChartTypeActive, isBtnDarkModeActive, isBtnGridActive, setGridVisible,
  isGridVisible, isBtnScaleActive, setChartScale, chartScale, animationsEnabled,
  isBtnAnimationsActive, setAnimationsEnabled,regenerateData
}) {



    
  // Refs for the dropdowns
  const filterRef = useRef(null);
  const chartTypeRef = useRef(null);

  // Handle clicks outside of dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target) &&
        chartTypeRef.current &&
        !chartTypeRef.current.contains(event.target)
      ) {
        setIsFilterOpen(false);
        setIsChartTypeOpen(false);
      }
    };

    // Attach the click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsFilterOpen, setIsChartTypeOpen]);

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
    if (isChartTypeOpen) setIsChartTypeOpen(false); // Close chart type dropdown if it's open
  };

  const handleChartTypeToggle = () => {
    setIsChartTypeOpen(!isChartTypeOpen);
    if (isFilterOpen) setIsFilterOpen(false); // Close filter dropdown if it's open
  };


  
  const exportData = () => {
    const data = regenerateData;
    const header = ["Category", ...data.series.map((s) => s.name)];
    const rows = data.categories.map((category, idx) => [
      category,
      ...data.series.map((s) => s.data[idx]),
    ]);
    const fullData = [header, ...rows];

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(fullData);
    XLSX.utils.book_append_sheet(wb, ws, "Sales Data");
    XLSX.writeFile(wb, `apex_${data.series[0].name}-${timeRange}.xlsx`);
  };

  return (
    <div className="apex_sales-controls">
      {isBtnRefreshActive && (
        <button
          onClick={() => setRefreshKey((prev) => prev + 1)}
          className="apex_btn apex_refresh-btn"
        >
          <RefreshCcw size={15} /> Refresh
        </button>
      )}

      {/* Time Range Filter */}
      {isBtnFilterActive && (
        <div ref={filterRef} className="apex_dropdown">
          <button
            onClick={handleFilterToggle}
            className="apex_btn apex_dropdown-toggle"
          >
            {timeRange} <ChevronDown size={16} />
          </button>
          {isFilterOpen && (
            <div className="apex_dropdown-menu">
              {FILTER_OPTIONS.map((range) => (
                <button
                  key={range}
                  onClick={() => {
                    setTimeRange(range);
                    setIsFilterOpen(false);
                    setRefreshKey((prev) => prev + 1);
                  }}
                  className={`apex_dropdown-item ${
                    timeRange === range ? "selected" : ""
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Chart Type Selector */}
      {isBtnChartTypeActive && (
        <div ref={chartTypeRef} className="apex_dropdown">
          <button
            onClick={handleChartTypeToggle}
            className="apex_btn apex_dropdown-toggle"
          >
            {chartType} <ChevronDown size={16} />
          </button>
          {isChartTypeOpen && (
            <div className="apex_dropdown-menu">
              {CHART_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setChartType(type);
                    setIsChartTypeOpen(false);
                    setRefreshKey((prev) => prev + 1);
                  }}
                  className={`apex_dropdown-item ${
                    chartType === type ? "selected" : ""
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Export Button */}
      {isBtnExportActive && (
        <button onClick={exportData} className="apex_btn">
          <Download size={15} /> Export Excel
        </button>
      )}

      {/* Dark Mode Toggle */}
      {isBtnDarkModeActive && (
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="apex_btn apex_dark-mode-btn"
        >
          {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      )}

      {/* Show/Hide Labels */}
      {isBtnLabelActive && (
        <button
          onClick={() => setShowLabels(!showLabels)}
          className={`apex_btn ${showLabels ? "active" : ""}`}
        >
          {showLabels ? "Hide " : "Show "}Labels
        </button>
      )}

      {/* Grid Visibility Toggle */}
      {isBtnGridActive && (
        <button
          onClick={() => setGridVisible(!isGridVisible)}
          className={`apex_btn ${isGridVisible ? "active" : ""}`}
        >
          <Layers size={15} /> {isGridVisible ? "Hide Grid" : "Show Grid"}
        </button>
      )}

      {/* Scale Adjustment */}
      {isBtnScaleActive && (
        <div className="apex_dropdown">
          <button
            onClick={() => setChartScale((prev) => (prev === 1 ? 1.5 : 1))}
            className="apex_btn apex_dropdown-toggle"
          >
            Scale {chartScale}x <ChevronDown size={16} />
          </button>
        </div>
      )}

      {/* Animation Toggle */}
      {isBtnAnimationsActive && (
        <button
          onClick={() => setAnimationsEnabled(!animationsEnabled)}
          className="apex_btn"
        >
          <Zap size={15} />{" "}
          {animationsEnabled ? "Disable Animations" : "Enable Animations"}
        </button>
      )}
    </div>
  );
}
