import { Link, Outlet } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaChartBar,
  FaBriefcase,
  FaBox,
  FaClipboardList,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import UserNavbar from "../components/UserNavbar";

export default function UserLayout() {
  const user = useSelector((state) => state.user);

  return (
    <div className="grid grid-cols-9">
      {/* header */}
      <Header username={user.username} />
      {/* sidebar */}
      <div className="col-start-1 h-[calc(100vh-3.5rem)] col-span-1 relative flex w-full flex-col bg-primary text-white bg-clip-border p-4">
        <UserNavbar />
      </div>
      {/* main content */}
      <div className="col-span-8 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}
