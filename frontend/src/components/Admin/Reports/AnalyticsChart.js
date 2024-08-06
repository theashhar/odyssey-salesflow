// src/components/AnalyticsChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AnalyticsChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy the existing chart if it exists
      chartRef.current.destroy();
    }

    // Create a new chart instance
    chartRef.current = new Chart(document.getElementById('myChart'), {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: ${context.raw}`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: false, // Set to false for grouped bars
            title: {
              display: true,
              text: 'Date Ranges',
              font: {
                size: 16,
                weight: 'bold',
              },
            },
          },
          y: {
            stacked: false, // Set to false for grouped bars
            grid: {
              borderDash: [5, 5],
            },
            title: {
              display: true,
              text: 'Counts',
              font: {
                size: 16,
                weight: 'bold',
              },
            },
          },
        },
      },
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return <canvas id="myChart" />;
};

export default AnalyticsChart;
