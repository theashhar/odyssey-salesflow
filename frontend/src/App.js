// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard";
import AdminClient from "./components/Admin/AdminClient/AdminClient";
import Report from "./components/Admin/Reports/Report";
import AddCategoryPage from "./components/Admin/Category/Addcategory";
import AdminLayout from "./layout/AdminLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/clients" element={<AdminClient />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/add-category" element={<AddCategoryPage />} />
        </Route>

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
