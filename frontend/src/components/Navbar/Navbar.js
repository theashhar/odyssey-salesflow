// src/components/Navbar/Navbar.js
import React from 'react';
import { FaHome, FaUser, FaChartBar, FaBriefcase, FaBox, FaClipboardList } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Admin Panel</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#home"><FaHome /> Home</a></li>
        <li><a href="#clients"><FaBriefcase /> Clients</a></li>
        <li><a href="#products"><FaBox /> Products</a></li>
        <li><a href="#users"><FaUser /> Users</a></li>
        <li><a href="#reports"><FaChartBar /> Analytics/Reports</a></li>
        <li><a href="#add-category"><FaClipboardList /> Add Category</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
