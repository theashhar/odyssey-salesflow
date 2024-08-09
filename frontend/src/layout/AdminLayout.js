import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function AdminLayout() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}
