import Button from "../../components/User/Button";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/Pagination";
import ExcelExport from "../../components/User/ExcelExport";
import { FaEdit, FaFilter, FaTrash } from "react-icons/fa";
import AddProduct from "../../components/AddProduct";
import SearchBox from "../../components/User/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  editProduct,
} from "../../features/product/productSlice";

//data
import oemData from "../../data/oemData.json";
import productNoData from "../../data/productNo.json";
import productlineData from "../../data/productline.json";
import { useState } from "react";

export default function Product({ type }) {
  //product pagination
  const itemsToShow = 5;
  const [currentItem, currentPage, setCurrentPage] = usePagination(itemsToShow);

  //redux state fetch
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  //filter
  const [productLine, setProductLine] = useState(null);
  const [productNo, setProductNo] = useState(null);
  const [oem, setOem] = useState(null);
  const [status, setStatus] = useState(null);

  //product line filter
  const selectProductLine = (event) => {
    // console.log(event.target.value);
    let newValue =
      event.target.value.toLowerCase() === "all"
        ? null
        : event.target.value.toLowerCase();
    setProductLine(newValue);
  };

  //product no. filter
  const selectProductNo = (event) => {
    // console.log(event.target.value);
    let newValue =
      event.target.value.toLowerCase() === "all"
        ? null
        : event.target.value.toLowerCase();
    setProductNo(newValue);
  };

  //oem filter
  const selectOEM = (event) => {
    // console.log(event.target.value);
    let newValue =
      event.target.value.toLowerCase() === "all"
        ? null
        : event.target.value.toLowerCase();
    setOem(newValue);
  };

  //lead status filter
  const selectStatus = (event) => {
    // console.log(event.target.value);
    let newValue =
      event.target.value.toLowerCase() === "all"
        ? null
        : event.target.value.toLowerCase();
    setStatus(newValue);
  };

  return (
    <div className="product-container w-full h-full flex flex-col items-center p-6 bg-gray-100">
      {/* add product section */}
      <div className="relative w-full mb-3">
        <h1 className="text-2xl mb-6">Add Product Line</h1>
        <div className="flex gap-x-3">
          <AddProduct type={type} />
        </div>
      </div>
      <div className="w-full h-full flex flex-col p-4 bg-white grow">
        {/* table topbar */}
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
        {/* product table */}
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
                  <select
                    className="oem uppercase bg-transparent"
                    onChange={selectOEM}
                  >
                    <option value="" disabled selected>
                      OEM
                    </option>
                    <option value={null}>All</option>
                    {oemData.map((oem, index) => (
                      <option key={index} value={oem}>
                        {oem}
                      </option>
                    ))}
                  </select>
                </th>
                <th scope="col" className="p-2">
                  <select
                    className="productLine uppercase bg-transparent"
                    onChange={selectProductLine}
                  >
                    <option value="" disabled selected>
                      Product Line
                    </option>
                    <option value={null}>All</option>
                    {productlineData.map((productline, index) => (
                      <option key={index} value={productline}>
                        {productline}
                      </option>
                    ))}
                  </select>
                </th>
                <th scope="col" className="p-2">
                  <select
                    className="productNo uppercase bg-transparent"
                    onChange={selectProductNo}
                  >
                    <option value="" disabled selected>
                      Product No.
                    </option>
                    <option value={null}>All</option>
                    {productNoData.map((productNo, index) => (
                      <option key={index} value={productNo}>
                        {productNo}
                      </option>
                    ))}
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
                  <select
                    className="status uppercase bg-transparent"
                    onChange={selectStatus}
                  >
                    <option value="" disabled selected>
                      Lead Status
                    </option>
                    <option value={null}>All</option>
                    <option value="success">Success</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="failed">Failed</option>
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
                .filter((product) =>
                  status === null
                    ? product.status === "active"
                    : product.lead_status.toLowerCase() === status
                )
                .filter((product) =>
                  oem === null
                    ? product.status === "active"
                    : product.oem.toLowerCase() === oem
                )
                .filter((product) =>
                  productLine === null
                    ? product.status === "active"
                    : product.product_line.toLowerCase() === productLine
                )
                .filter((product) =>
                  productNo === null
                    ? product.status === "active"
                    : product.product_no.toLowerCase() === productNo
                )
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
                      <button onClick={() => dispatch(editProduct(product.id))}>
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => dispatch(deleteProduct(product.id))}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
                .slice(currentItem.start, currentItem.end)}
            </tbody>
          </table>
        </div>
        {/* pagination */}
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
