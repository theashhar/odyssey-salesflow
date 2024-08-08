import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/User/DashBoard";
import UserLayout from "./layout/UserLayout";
import Analytics from "./pages/User/Analytics";
import Product from "./pages/User/Product";
import Client from "./pages/User/Client";
import Users from "./pages/User/Users";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/client" element={<Client />} />
          <Route path="/user" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}
