import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import UserNavbar from "../components/UserNavbar";

export default function AdminLayout() {
  return (
    <div className="app">
      <div className="grid grid-cols-9">
        {/* header */}
        <Header username="admin" />
        {/* sidebar */}
        <div className="col-start-1 h-[calc(100vh-3.5rem)] col-span-1 relative flex w-full max-w-[20rem] flex-col bg-primary text-white bg-clip-border p-4">
          <UserNavbar type="admin" />
        </div>
        {/* main content */}
        <div className="col-span-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
