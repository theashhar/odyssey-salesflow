// src/components/Navbar/Navbar.js
import React from 'react';
import { FaHome, FaUser, FaChartBar, FaBriefcase, FaBox, FaClipboardList } from 'react-icons/fa';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Admin Panel</h2>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" activeClassName="active-link">
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/clients" activeClassName="active-link">
            <FaBriefcase /> Clients
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active-link">
            <FaBox /> Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName="active-link">
            <FaUser /> Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" activeClassName="active-link">
            <FaChartBar /> Analytics/Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-category" activeClassName="active-link">
            <FaClipboardList /> Add Category
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
