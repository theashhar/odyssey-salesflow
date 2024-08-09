// src/components/AnalyticsPage.js
import React, { useState } from "react";
import AnalyticsChart from "./AnalyticsChart";
import "./AnalyticsPage.css";

// Import JSON data directly
import monthsData from "../../../data/Analytics/months.json";
import oemsData from "../../../data/Analytics/oems.json";
import chartData from "../../../data/Analytics/chartData.json";

const AnalyticsPage = () => {
  const [month, setMonth] = useState("January");
  const [oem, setOem] = useState("");

  // Get the chart data for the selected month
  const data = chartData[month] || { labels: [], datasets: [] };

  return (
    <div className="analytics-page">
      <header className="page-header">
        <h1>Analytics Dashboard</h1>
        <p>View and analyze your performance metrics</p>
      </header>
      <div className="filters">
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          {monthsData.map((m, index) => (
            <option key={index} value={m}>
              {m}
            </option>
          ))}
        </select>
        <select value={oem} onChange={(e) => setOem(e.target.value)}>
          <option value="">Select OEM</option>
          {oemsData.map((o, index) => (
            <option key={index} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="stats">
        <h2>
          Total Quantity Sold: <span>100</span>
        </h2>
        <h3>
          Leads Success: <span>80%</span>
        </h3>
      </div>
      <div className="chart-container">
        <AnalyticsChart data={data} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
