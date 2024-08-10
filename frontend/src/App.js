// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard";
import AdminClient from "./components/Admin/AdminClient/AdminClient";
import Report from "./components/Admin/Reports/Report";
import AddCategoryPage from "./components/Admin/Category/Addcategory";
import AdminLayout from "./layout/AdminLayout";

import UserLayout from "./layout/UserLayout";
import UserDashboard from "./pages/User/UserDashboard";
import Analytics from "./pages/User/Analytics";
import Product from "./pages/User/Product";
import Client from "./pages/User/Client";
import Users from "./pages/User/Users";
import LoginPage from "./pages/Login/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product type="admin" />} />
          <Route path="analytics" element={<Report />} />
          <Route path="client" element={<AdminClient />} />
          <Route path="profile" element={<Users type="admin" />} />
          <Route path="add-category" element={<AddCategoryPage />} />
        </Route>
        <Route exact path="/user" element={<UserLayout />}>
          <Route index element={<Product />} />
          <Route path="product" element={<Product type="user" />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="client" element={<Client />} />
          <Route path="profile" element={<Users type="user" />} />
        </Route>
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
