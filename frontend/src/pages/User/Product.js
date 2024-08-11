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
import { useEffect, useState } from "react";
import { useFormik } from "formik";

//data
import oemData from "../../data/oemData.json";
import productNoData from "../../data/productNo.json";
import productlineData from "../../data/productline.json";

const defaultUpdateValues = {
  sales_person: "Salesperson 1",
  entry_date: "",
  entry_time: "",
  partner_name: "",
  partner_rep_name: "",
  oem: "",
  product_line: "",
  product_no: "",
  rate_quote: "",
  qnty: "",
  lead_status: "ongoing",
  follow_up_date: "",
  remark: "",
};

export default function Product({ type }) {
  //product pagination
  const itemsToShow = 6;
  const [currentItem, currentPage, setCurrentPage] = usePagination(itemsToShow);

  //redux state fetch
  const dispatch = useDispatch();
  let products = useSelector((state) => state.product);
  // console.log(products);

  //filter
  const [productLine, setProductLine] = useState(null);
  const [productNo, setProductNo] = useState(null);
  const [oem, setOem] = useState(null);
  const [status, setStatus] = useState(null);
  const [productList, setProductList] = useState(products);

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
  const selectStatus = () => {};

  //edit product data
  const [updateState, setUpdateState] = useState(false);
  const [initialUpdateValues, setUpdateValues] = useState({});

  useEffect(() => {
    const currentRow = products.filter((product) => product.id === updateState);
    console.log(updateState);
    console.log(currentRow[0]);
    setUpdateValues(currentRow[0]);
  }, [updateState]);

  const handleEdit = (id) => {
    setUpdateState(id);
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialUpdateValues || defaultUpdateValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      setUpdateState(false);
      dispatch(editProduct({ ...values }));
    },
  });

  return (
    <div className="product-container w-full h-full flex flex-col items-center p-6">
      {/* add product section */}
      <div className="relative w-full mb-3">
        <h1 className="text-2xl mb-6">Add Product Line</h1>
        <div className="flex gap-x-3">
          <AddProduct type={type} />
        </div>
      </div>
      <div className="w-full h-full flex flex-col p-4 bg-white shadow-lg grow">
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
        <div className="mt-4 grow">
          <table className="text-sm text-gray-700 text-left">
            <thead className="text-xs text-gray-900 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="th-common">
                  ID
                </th>
                <th scope="col" className="th-common">
                  Entry date
                </th>
                <th scope="col" className="th-common">
                  Entry time
                </th>
                <th scope="col" className="th-common">
                  Partner
                </th>
                <th scope="col" className="th-common">
                  Partner rep
                </th>
                <th scope="col" className="th-common">
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
                <th scope="col" className="th-common">
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
                <th scope="col" className="th-common">
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
                <th scope="col" className="th-common">
                  Rate
                </th>
                <th scope="col" className="th-common">
                  Qnty
                </th>
                <th scope="col" className="th-common">
                  Follow-up
                </th>
                <th scope="col" className="th-common">
                  <select
                    className="status uppercase bg-transparent"
                    onChange={(e) =>
                      selectStatus(setStatus(e.target.value.toLowerCase()))
                    }
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
                <th scope="col" className="th-common">
                  Remark
                </th>
                <th scope="col" className="th-common">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products
                .map((product, index) =>
                  updateState === product.id ? (
                    <tr key={index} className="bg-white border-b h-6">
                      <td className="td-common">{values.id}</td>
                      <td className="td-common">{values.entry_date}</td>
                      <td className="td-common">{values.entry_time}</td>
                      <td className="td-common">{values.partner_name}</td>
                      <td className="td-common">{values.partner_rep_name}</td>
                      <td className="td-common">{values.oem}</td>
                      <td className="td-common">{values.product_line}</td>
                      <td className="td-common">{values.product_no}</td>
                      <td className="td-common">{values.rate_quote}</td>
                      <td className="td-common">{values.qnty}</td>
                      <td className="td-common bg-gray-400">
                        <input
                          type="date"
                          name="follow_up_date"
                          value={values.follow_up_date}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className="w-28"
                        />
                      </td>
                      <td className={`td-common bg-gray-400`}>
                        <input
                          type="text"
                          name="lead_status"
                          value={values.lead_status}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className="w-24"
                        />
                      </td>
                      <td className="td-common bg-gray-400">
                        <input
                          type="text"
                          name="remark"
                          value={values.remark}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className="w-28"
                        />
                      </td>
                      <td className="td-common flex justify-center gap-x-2">
                        <Button
                          onHandleClick={handleSubmit}
                          title="update"
                          type="submit"
                        />
                      </td>
                    </tr>
                  ) : (
                    <tr key={index} className="bg-white border-b h-10">
                      <td className="td-common">{product.id}</td>
                      <td className="td-common">{product.entry_date}</td>
                      <td className="td-common">{product.entry_time}</td>
                      <td className="td-common">{product.partner_name}</td>
                      <td className="td-common">{product.partner_rep_name}</td>
                      <td className="td-common">{product.oem}</td>
                      <td className="td-common">{product.product_line}</td>
                      <td className="td-common">{product.product_no}</td>
                      <td className="td-common">{product.rate_quote}</td>
                      <td className="td-common">{product.qnty}</td>
                      <td className="td-common">{product.follow_up_date}</td>
                      <td className={`td-common text-white`}>
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
                      <td className="td-common">{product.remark}</td>
                      <td className="td-common flex justify-center gap-x-2">
                        <button
                          onClick={() => {
                            handleEdit(product.id);
                          }}
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => dispatch(deleteProduct(product.id))}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  )
                )
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
