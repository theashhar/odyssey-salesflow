import Button from "../../components/User/Button";
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
import Modal from "react-modal";

//data
import oemData from "../../data/oemData.json";
import productNoData from "../../data/productNo.json";
import productlineData from "../../data/productline.json";
import Input, { Select, TextArea } from "../../components/User/Input";

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
const leadStatus = ["success", "ongoing", "failed"];
// Modal styles
const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

Modal.setAppElement("#root");

export default function Product({ type }) {
  //redux state fetch
  const dispatch = useDispatch();
  let products = useSelector((state) => state.product);

  //modal states
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //update product data
  const [updateState, setUpdateState] = useState(false);
  const [initialUpdateValues, setUpdateValues] = useState({});

  //filter data
  const [productLine, setProductLine] = useState(null);
  const [productNo, setProductNo] = useState(null);
  const [oem, setOem] = useState(null);
  const [status, setStatus] = useState(null);

  //modal
  useEffect(() => {
    console.log("Modal is open:", modalIsOpen);
  }, [modalIsOpen]);

  //filter
  const selectProductLine = (event) => {
    setProductLine(
      event.target.value.toLowerCase() === "all"
        ? null
        : event.target.value.toLowerCase()
    );
  };

  const selectProductNo = (event) => {
    setProductNo(
      event.target.value.toLowerCase() === "all"
        ? null
        : event.target.value.toLowerCase()
    );
  };

  const selectOEM = (event) => {
    setOem(
      event.target.value.toLowerCase() === "all"
        ? null
        : event.target.value.toLowerCase()
    );
  };

  const selectStatus = (event) => {
    setStatus(
      event.target.value.toLowerCase() === "all"
        ? null
        : event.target.value.toLowerCase()
    );
  };

  //update product
  useEffect(() => {
    const currentRow = products.filter((product) => product.id === updateState);
    console.log(updateState);
    console.log(currentRow[0]);
    setUpdateValues(currentRow[0]);
  }, [updateState]);

  const handleEdit = (id) => {
    setUpdateState(id);
    setModalIsOpen(true);
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialUpdateValues || defaultUpdateValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      setUpdateState(false);
      dispatch(editProduct({ ...values }));
      setModalIsOpen(false);
    },
  });

  return (
    <>
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
            <h2 className="flex-1 text-lg font-medium text-gray-800">
              Products
            </h2>
            <form className="searchbar">
              <SearchBox />
            </form>
            <Button title="filter">
              <FaFilter />
            </Button>
            <ExcelExport excelData={products} fileName={"products"} />
          </div>
          {/* product table */}
          <div className="w-full overflow-x-scroll mt-4 grow">
            <table className="text-sm w-full text-gray-700 text-left">
              <thead className="text-xs text-gray-900 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="th-common">
                    Salesperson
                  </th>
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
                    <tr key={index} className="bg-gray-50 border-b">
                      <td className="p-2 border-b">{product.sales_person}</td>
                      <td className="p-2 border-b">{product.id}</td>
                      <td className="p-2 border-b">{product.entry_date}</td>
                      <td className="p-2 border-b">{product.entry_time}</td>
                      <td className="p-2 border-b">{product.partner_name}</td>
                      <td className="p-2 border-b">
                        {product.partner_rep_name}
                      </td>
                      <td className="p-2 border-b">{product.oem}</td>
                      <td className="p-2 border-b">{product.product_line}</td>
                      <td className="p-2 border-b">{product.product_no}</td>
                      <td className="p-2 border-b">{product.rate_quote}</td>
                      <td className="p-2 border-b">{product.qnty}</td>
                      <td className="p-2 border-b">{product.follow_up_date}</td>
                      <td className="p-2 border-b">
                        <span
                          className={`px-[0.5rem] py-1 rounded-full text-white ${
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
                      <td className="p-2 border-b">{product.remark}</td>
                      <td className="p-2 border-b flex gap-2">
                        <Button
                          title="Edit"
                          onHandleClick={() => handleEdit(product.id)}
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          title="Delete"
                          onHandleClick={() =>
                            dispatch(deleteProduct(product.id))
                          }
                        >
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Lead Status Change Confirmation */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customModalStyles}
      >
        <h2 className="text-lg font-semibold mb-4">
          Confirm Lead Status Change
        </h2>
        {updateState && (
          <div className="flex flex-col gap-y-6">
            <Select
              label="lead status"
              name="lead_status"
              options={leadStatus}
              value={values.lead_status}
              onHandleBlur={handleBlur}
              onHandleChange={handleChange}
            />
            <Input
              type="date"
              label="follow up date"
              name="follow_up_date"
              value={values.follow_up_date}
              onHandleBlur={handleBlur}
              onHandleChange={handleChange}
            />
            <TextArea
              type="text"
              label="remark"
              name="remark"
              value={values.remark}
              onHandleBlur={handleBlur}
              onHandleChange={handleChange}
            />
          </div>
        )}
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
            type="submit"
          >
            Save
          </button>
          <button
            onClick={() => setModalIsOpen(false)}
            className="bg-gray-500 text-white hover:bg-gray-600 px-4 py-2 rounded"
          >
            No
          </button>
        </div>
      </Modal>
    </>
  );
}
