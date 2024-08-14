import React, { useState } from "react";
import SearchBox from "../../components/User/SearchBox";
import Button from "../../components/User/Button";
import { FaEdit, FaFilter, FaTrash } from "react-icons/fa";
import ExcelExport from "../../components/User/ExcelExport";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient, editClient } from "../../features/client/clientSlice";
import AddCategory from "../../components/Admin/Category/Addcategory";

const AddCategoryPage = () => {
  //redux state fetch
  const dispatch = useDispatch();
  const productLine = useSelector((state) => state.productline_category);
  const oem = useSelector((state) => state.oem_category);
  const salesperson = useSelector((state) => state.salesperson);

  console.log(salesperson);

  return (
    <div className="clients-container w-full h-full flex flex-col items-center p-6">
      {/* add client section */}
      <div className="relative w-full mb-3">
        <h1 className="text-2xl mb-6">Add Category</h1>
        <div className="flex gap-x-3">
          <AddCategory type="admin" />
        </div>
      </div>
      <div className="w-full h-full flex flex-col p-4 bg-white shadow-lg grow">
        {/* table topbar */}
        <div className="flex items-center gap-x-6">
          <h2 className="flex-1 text-lg font-medium text-gray-800">
            Categories
          </h2>
          <form className="searchbar">
            <SearchBox />
          </form>
          <ExcelExport tableID="categoryTable" fileName={"categories"} />
        </div>
        {/* client table */}
        <div className="relative overflow-x-auto mt-4 grow">
          <table
            id="categoryTable"
            className="w-full text-sm text-gray-700 text-left"
          >
            <thead className="text-xs text-gray-900 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="p-3">
                  Salesperson
                </th>
                <th scope="col" className="p-3">
                  OEM
                </th>
                <th scope="col" className="p-3">
                  Product Line
                </th>
                {/* <th scope="col" className="p-3">
                  Actions
                </th> */}
              </tr>
            </thead>
            <tbody>
              {salesperson.flatMap((salesperson) =>
                salesperson.category.map((cat, index) => (
                  <tr key={`${salesperson.id}-${index}`}>
                    <td className="p-2 border-b">{salesperson.name}</td>
                    <td className="p-2 border-b">{cat.oem}</td>
                    <td className="p-2 border-b">{cat.product_line}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryPage;

/* <td className="p-3 flex gap-x-3">
                      <button onClick={() => dispatch(editClient(client.id))}>
                        <FaEdit />
                      </button>
                      <button onClick={() => dispatch(deleteClient(client.id))}>
                        <FaTrash />
                      </button>
                    </td> */
