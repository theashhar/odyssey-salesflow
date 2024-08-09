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

export default function UserLayout() {
  const user = useSelector((state) => state.user);

  return (
    <div className="grid grid-cols-6">
      {/* header */}
      <Header username={user.username} />
      {/* sidebar */}
      <div className="col-start-1 h-[calc(100vh-3.5rem)] col-span-1 relative flex w-full max-w-[20rem] flex-col bg-primary text-white bg-clip-border p-4">
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <div className="relative block w-full">
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none bg-blue-gray-50/50 text-start text-blue-gray-700 hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link
                to="/client"
                className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-900 hover:text-blue-gray-900"
              >
                <FaBriefcase />
                <p className="block ml-4 mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                  Client
                </p>
              </Link>
            </div>
          </div>
          <div className="relative block w-full">
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link
                to="/product"
                className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900"
              >
                <FaBox />
                <p className="block ml-4 mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                  Product
                </p>
              </Link>
            </div>
          </div>
          <div className="relative block w-full">
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link
                to="/user"
                className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900"
              >
                <FaUser />
                <p className="block ml-4 mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                  User
                </p>
              </Link>
            </div>
          </div>
          <div className="relative block w-full">
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link
                to="/analytics"
                className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900"
              >
                <FaChartBar />
                <p className=" ml-4 mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                  Analytics
                </p>
              </Link>
            </div>
          </div>
          <div className="relative block w-full">
            <div
              role="button"
              className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link
                to="#"
                className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900"
              >
                <FaClipboardList />
                <p className="block ml-4 mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                  Add category
                </p>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* main content */}
      <div className="col-span-5">
        <Outlet />
      </div>
    </div>
  );
}
