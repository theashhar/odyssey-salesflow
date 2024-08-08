import Button from "../../components/User/Button";
// import products from "../../data/products.json";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/Pagination";
import ExcelExport from "../../components/User/ExcelExport";
import { FaEdit, FaFilter, FaTrash } from "react-icons/fa";
import AddProduct from "../../components/User/AddProduct";
import SearchBox from "../../components/User/SearchBox";
import { useSelector } from "react-redux";

export default function Product() {
  //pagination
  const itemsToShow = 5;
  const [currentItem, currentPage, setCurrentPage] = usePagination(itemsToShow);

  const products = useSelector((state) => state.product);

  return (
    <div className="product-container w-full h-full flex flex-col items-center p-6 bg-gray-100">
      <div className="relative w-full mb-3">
        <h1 className="text-2xl mb-6">Add Product Line</h1>
        <div className="flex gap-x-3">
          <AddProduct />
        </div>
      </div>
      <div className="w-full h-full flex flex-col p-4 bg-white grow">
        <div className="flex items-center gap-x-6">
          <h2 className="flex-1 text-lg font-medium text-gray-800">Products</h2>
          <form className="searchbar">
            <SearchBox />
          </form>
          <Button title="filter">
            <FaFilter />
          </Button>
          <ExcelExport excelData={products} fileName={"products"} />
        </div>
        <div className="relative overflow-x-auto mt-4 grow">
          <table className="w-full text-sm text-gray-700 text-left">
            <thead className="text-xs text-gray-900 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="p-2">
                  ID
                </th>
                <th scope="col" className="p-2">
                  Entry date
                </th>
                <th scope="col" className="p-2">
                  Entry time
                </th>
                <th scope="col" className="p-2">
                  Partner name
                </th>
                <th scope="col" className="p-2">
                  Partner rep name
                </th>
                <th scope="col" className="p-2">
                  <select className="uppercase bg-transparent">
                    <option value="" disabled selected>
                      OEM
                    </option>
                    <option value="optionText1">Option Text 1</option>
                    <option value="optionText2">Option Text 2</option>
                    <option value="optionText3">Option Text 3</option>
                  </select>
                </th>
                <th scope="col" className="p-2">
                  <select className="uppercase bg-transparent">
                    <option value="" disabled selected>
                      Product Line
                    </option>
                    <option value="optionText1">Option Text 1</option>
                    <option value="optionText2">Option Text 2</option>
                    <option value="optionText3">Option Text 3</option>
                  </select>
                </th>
                <th scope="col" className="p-2">
                  <select className="uppercase bg-transparent">
                    <option value="" disabled selected>
                      Product No.
                    </option>
                    <option value="optionText1">Option Text 1</option>
                    <option value="optionText2">Option Text 2</option>
                    <option value="optionText3">Option Text 3</option>
                  </select>
                </th>
                <th scope="col" className="p-2">
                  Rate quote
                </th>
                <th scope="col" className="p-2">
                  Qnty
                </th>
                <th scope="col" className="p-2">
                  Follow-up Date
                </th>
                <th scope="col" className="p-2">
                  <select className="uppercase bg-transparent">
                    <option value="" disabled selected>
                      Lead Status
                    </option>
                    <option value="optionText1">Success</option>
                    <option value="optionText2">Ongoing</option>
                    <option value="optionText3">Failed</option>
                  </select>
                </th>
                <th scope="col" className="p-2">
                  Remark
                </th>
                <th scope="col" className="p-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products
                .map((product, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="p-3">{product.id}</td>
                    <td className="p-3">{product.entry_date}</td>
                    <td className="p-3">{product.entry_time}</td>
                    <td className="p-3">{product.partner_name}</td>
                    <td className="p-3">{product.partner_rep_name}</td>
                    <td className="p-3">{product.oem}</td>
                    <td className="p-3">{product.product_line}</td>
                    <td className="p-3">{product.product_no}</td>
                    <td className="p-3">{product.rate}</td>
                    <td className="p-3">{product.qnty}</td>
                    <td className="p-3">{product.follow_up_date}</td>
                    <td className={`p-3 text-white`}>
                      <span
                        className={`px-[0.5rem] py-1 rounded-full ${
                          product.lead_status === "success"
                            ? "bg-green-600"
                            : product.lead_status === "ongoing"
                            ? "bg-yellow-400"
                            : "bg-red-600"
                        }`}
                      >
                        {product.lead_status}
                      </span>
                    </td>
                    <td className="p-3">{product.remark}</td>
                    <td className="p-3 flex justify-center gap-x-2">
                      <button>
                        <FaEdit />
                      </button>
                      <button>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
                .slice(currentItem.start, currentItem.end)}
            </tbody>
          </table>
        </div>
        <Pagination
          type="button"
          totalItems={products.length}
          itemsToShow={itemsToShow}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          start={currentItem.start}
          end={currentItem.end}
        />
      </div>
    </div>
  );
}
