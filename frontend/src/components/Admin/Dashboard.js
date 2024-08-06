// src/components/Dashboard.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import AdminSection from './AdminSection';
import './Dashboard.css'; // For custom styling

const Dashboard = () => {
  // Example data for salespeople
 

  return (
    <div className="dashboard">
      <Navbar />
      <div className="main-content">
        <AdminSection  />
      </div>
    </div>
  );
};

export default Dashboard;
