import React, { useState, useEffect } from "react";
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
import Modal from 'react-modal';

// Data imports
import oemData from "../../data/oemData.json";
import productNoData from "../../data/productNo.json";
import productlineData from "../../data/productline.json";

// Modal styles
const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

Modal.setAppElement('#root');

export default function Product({ type }) {
  const itemsToShow = 5;
  const [currentItem, currentPage, setCurrentPage] = usePagination(itemsToShow);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  const [productLine, setProductLine] = useState(null);
  const [productNo, setProductNo] = useState(null);
  const [oem, setOem] = useState(null);
  const [status, setStatus] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [productChanges, setProductChanges] = useState({});

  useEffect(() => {
    console.log("Modal is open:", modalIsOpen);
  }, [modalIsOpen]);

  const selectProductLine = (event) => {
    setProductLine(event.target.value.toLowerCase() === "all" ? null : event.target.value.toLowerCase());
  };

  const selectProductNo = (event) => {
    setProductNo(event.target.value.toLowerCase() === "all" ? null : event.target.value.toLowerCase());
  };

  const selectOEM = (event) => {
    setOem(event.target.value.toLowerCase() === "all" ? null : event.target.value.toLowerCase());
  };

  const selectStatus = (event) => {
    setStatus(event.target.value.toLowerCase() === "all" ? null : event.target.value.toLowerCase());
  };

  const handleFollowUpChange = (productId, followUpDate) => {
    setSelectedProduct(productId);
    setModalIsOpen(true);
  };

  const handleStatusChange = (productId, leadStatus) => {
    setSelectedProduct(productId);
    setModalIsOpen(true);
  };

  const handleRemarkChange = (productId, remark) => {
    setSelectedProduct(productId);
    setModalIsOpen(true);
   
  };
  const saveChanges = () => {
    if (selectedProduct) {
      // Find the product to update
      const updatedProduct = products.find(product => product.id === selectedProduct);
      
      if (updatedProduct) {
        // Prepare the updated data
        const updatedData = {
          id: selectedProduct,
          follow_up_date: productChanges[selectedProduct]?.follow_up_date || updatedProduct.follow_up_date,
          remark: productChanges[selectedProduct]?.remark || updatedProduct.remark,
          lead_status: productChanges[selectedProduct]?.lead_status || updatedProduct.lead_status,
          // Include other fields as needed
        };
  
        // Check for differences to avoid unnecessary dispatch
        const hasChanges = Object.keys(updatedData).some(
          key => updatedData[key] !== updatedProduct[key]
        );
  
        if (hasChanges) {
          // Dispatch the action to update the product
          dispatch(editProduct(updatedData));
        }
  
        // Close the modal and reset state
        setModalIsOpen(false);
        setSelectedProduct(null);
        setProductChanges(prev => ({ ...prev, [selectedProduct]: {} }));
      } else {
        console.error('Product not found');
      }
    } else {
      console.error('No product selected');
    }
  };
  
  

  const currentProduct = products.find(p => p.id === selectedProduct);

  return (
    <div className="product-container w-full h-full flex flex-col items-center p-6 bg-gray-100">
      <div className="relative w-full mb-3">
        <h1 className="text-2xl mb-6 text-gray-800">Add Product Line</h1>
        <div className="flex gap-x-3">
          <AddProduct type={type} />
        </div>
      </div>
      <div className="w-full h-full flex flex-col p-4 bg-white grow shadow-md">
        <div className="flex items-center gap-x-6">
          <h2 className="flex-1 text-lg font-medium text-gray-800">Products</h2>
          <form className="searchbar">
            <SearchBox />
          </form>
          <Button title="filter" className="bg-blue-500 text-white hover:bg-blue-600">
            <FaFilter />
          </Button>
          <ExcelExport excelData={products} fileName={"products"} />
        </div>
        <div className="relative overflow-x-auto mt-4 grow">
          <table className="w-full text-sm text-gray-700 text-left">
            <thead className="text-xs text-gray-900 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="p-2 border-b">ID</th>
                <th scope="col" className="p-2 border-b">Entry date</th>
                <th scope="col" className="p-2 border-b">Entry time</th>
                <th scope="col" className="p-2 border-b">Partner name</th>
                <th scope="col" className="p-2 border-b">Partner rep name</th>
                <th scope="col" className="p-2 border-b">
                  <select className="oem uppercase bg-transparent border rounded py-1 px-2" onChange={selectOEM}>
                    <option value="" disabled selected>OEM</option>
                    <option value={null}>All</option>
                    {oemData.map((oem, index) => (
                      <option key={index} value={oem}>{oem}</option>
                    ))}
                  </select>
                </th>
                <th scope="col" className="p-2 border-b">
                  <select className="productLine uppercase bg-transparent border rounded py-1 px-2" onChange={selectProductLine}>
                    <option value="" disabled selected>Product Line</option>
                    <option value={null}>All</option>
                    {productlineData.map((productline, index) => (
                      <option key={index} value={productline}>{productline}</option>
                    ))}
                  </select>
                </th>
                <th scope="col" className="p-2 border-b">
                  <select className="productNo uppercase bg-transparent border rounded py-1 px-2" onChange={selectProductNo}>
                    <option value="" disabled selected>Product No.</option>
                    <option value={null}>All</option>
                    {productNoData.map((productNo, index) => (
                      <option key={index} value={productNo}>{productNo}</option>
                    ))}
                  </select>
                </th>
                <th scope="col" className="p-2 border-b">Rate quote</th>
                <th scope="col" className="p-2 border-b">Qnty</th>
                <th scope="col" className="p-2 border-b">Follow Up Date</th>
                <th scope="col" className="p-2 border-b">
                  <select className="status uppercase bg-transparent border rounded py-1 px-2" onChange={selectStatus}>
                    <option value="" disabled selected>Lead Status</option>
                    <option value={null}>All</option>
                    <option value="success">Success</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="failed">Failed</option>
                  </select>
                </th>
                <th scope="col" className="p-2 border-b">Remark</th>
                <th scope="col" className="p-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((product) =>
                  status === null ? product.status === "active" : product.lead_status.toLowerCase() === status
                )
                .filter((product) =>
                  oem === null ? product.status === "active" : product.oem.toLowerCase() === oem
                )
                .filter((product) =>
                  productLine === null ? product.status === "active" : product.product_line.toLowerCase() === productLine
                )
                .filter((product) =>
                  productNo === null ? product.status === "active" : product.product_no.toLowerCase() === productNo
                )
                .map((product, index) => (
                  <tr key={index} className="bg-gray-50 border-b">
                    <td className="p-2 border-b">{product.id}</td>
                    <td className="p-2 border-b">{product.entry_date}</td>
                    <td className="p-2 border-b">{product.entry_time}</td>
                    <td className="p-2 border-b">{product.partner_name}</td>
                    <td className="p-2 border-b">{product.partner_rep_name}</td>
                    <td className="p-2 border-b">{product.oem}</td>
                    <td className="p-2 border-b">{product.product_line}</td>
                    <td className="p-2 border-b">{product.product_no}</td>
                    <td className="p-2 border-b">{product.rate_quote}</td>
                    <td className="p-2 border-b">{product.qnty}</td>
                    <td className="p-2 border-b">
                      <input
                        type="date"
                        value={productChanges[product.id]?.follow_up_date || product.follow_up_date}
                        onChange={(e) => handleFollowUpChange(product.id, e.target.value)}
                      />
                    </td>
                    <td className="p-2 border-b">
                      <select
                        value={product.lead_status}
                        onChange={(e) => handleStatusChange(product.id, e.target.value)}
                      >
                        <option value="success">Success</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="failed">Failed</option>
                      </select>
                    </td>
                    <td className="p-2 border-b">
                      <textarea
                        value={productChanges[product.id]?.remark || product.remark}
                        onChange={(e) => handleRemarkChange(product.id, e.target.value)}
                      />
                    </td>
                    <td className="p-2 border-b flex gap-2">
                      <Button title="Edit" onClick={() => dispatch(editProduct(product))}>
                        <FaEdit />
                      </Button>
                      <Button title="Delete" onClick={() => dispatch(deleteProduct(product.id))}>
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Pagination
            totalItems={products.length}
            itemsPerPage={itemsToShow}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>

      {/* Modal for Lead Status Change Confirmation */}
     <Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  style={customModalStyles}
>
  <h2 className="text-lg font-semibold mb-4">Confirm Lead Status Change</h2>
  {currentProduct && (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700">Follow Up Date:</label>
        <input
          type="date"
          value={productChanges[currentProduct.id]?.follow_up_date || currentProduct.follow_up_date}
          onChange={(e) => handleFollowUpChange(currentProduct.id, e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Lead Status:</label>
        <select
          value={productChanges[currentProduct.id]?.lead_status || currentProduct.lead_status}
          onChange={(e) => handleStatusChange(currentProduct.id, e.target.value)}
          className="w-full border rounded px-2 py-1"
        >
          <option value="success">Success</option>
          <option value="ongoing">Ongoing</option>
          <option value="failed">Failed</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Remark:</label>
        <textarea
          value={productChanges[currentProduct.id]?.remark || currentProduct.remark}
          onChange={(e) => handleRemarkChange(currentProduct.id, e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      
    </div>
  )}
  <div className="flex gap-4 mt-4">
    <button onClick={saveChanges} className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded">
      Save
    </button>
    <button onClick={() => setModalIsOpen(false)} className="bg-gray-500 text-white hover:bg-gray-600 px-4 py-2 rounded">
      No
    </button>
  </div>
</Modal>

    </div>
  );
}
