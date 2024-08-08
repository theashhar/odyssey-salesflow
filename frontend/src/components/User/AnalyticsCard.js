import { FaBriefcase, FaSalesforce } from "react-icons/fa";

export default function AnalyticsCard({ title, number, children }) {
  return (
    <div className="row-span-2 px-5 border flex items-center gap-x-4">
      {children}
      <div>
        <h1 className="text-xl">{title}</h1>
        <span className="text-3xl text-primary font-semibold">{number}</span>
      </div>
    </div>
  );
}
