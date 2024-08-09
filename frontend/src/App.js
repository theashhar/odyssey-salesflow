// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Admin/Dashboard';
import AdminClient from './components/Admin/AdminClient/AdminClient';
import Report from './components/Admin/Reports/Report';

import "./App.css";
import AddCategoryPage from './components/Admin/Category/Addcategory';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<AdminClient />} />
          <Route path="/reports" element={<Report/>}/>
          <Route path="/add-category" element={<AddCategoryPage />} />
         
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
