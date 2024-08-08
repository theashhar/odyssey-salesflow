import { FaBriefcase, FaTrophy } from "react-icons/fa";
import AnalyticsCard from "../../components/User/AnalyticsCard";
import { Select } from "../../components/User/Input";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const oemData = ["HP", "Dell", "Samsung", "Lenovo"];

export default function Analytics() {
  return (
    <div className="analytics-container w-full h-full flex flex-col items-center p-6 bg-gray-100">
      <div className="relative w-full mb-3">
        <h1 className="text-2xl mb-4">Analytics</h1>
      </div>
      <div className="w-full h-full p-4 bg-white grow grid grid-cols-5 grid-rows-12 gap-4">
        <div className="col-span-5 flex gap-x-5">
          <Select label="Select Month" name="Select Month" options={months} />
          <Select label="Select OEM" name="OEM" options={oemData} />
        </div>
        <AnalyticsCard title="Total qnty sold" number="240">
          <FaBriefcase />
        </AnalyticsCard>
        <AnalyticsCard title="Lead success" number="80%">
          <FaTrophy />
        </AnalyticsCard>
        <AnalyticsCard title="Total qnty sold" number="240">
          <FaBriefcase />
        </AnalyticsCard>
        <div className="col-span-2 row-span-11 border">Remarks</div>
        <div className="col-span-3 row-span-9 border">Chart</div>
      </div>
    </div>
  );
}
