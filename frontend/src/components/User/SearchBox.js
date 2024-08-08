import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
  return (
    <>
      <div className="relative">
        <div className="absolute px-3 top-3 left-1 flex items-center pointer-events-none">
          <FaSearch />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full px-10 py-2.5 text-sm text-gray-900 border border-gray-300 bg-gray-50"
          placeholder="Search..."
          required
        />
      </div>
    </>
  );
}
