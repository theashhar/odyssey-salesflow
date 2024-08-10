// src/components/Dashboard.js
import React from "react";
import AdminSection from "./AdminSection";
import styles from "./Dashboard.module.css"; // For custom styling

const Dashboard = () => {
  // Example data for salespeople

  return (
    <div className={styles.dashboard}>
      <div className={styles.main_content}>
        <AdminSection />
      </div>
    </div>
  );
};

export default Dashboard;
