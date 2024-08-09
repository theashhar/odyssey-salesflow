import React, { useState } from "react";
import SearchBox from "../../components/User/SearchBox";
import Button from "../../components/User/Button";
import { FaEdit, FaFilter, FaTrash } from "react-icons/fa";
import ExcelExport from "../../components/User/ExcelExport";
// import clients from "../../data/client.json";
import Pagination from "../../components/Pagination";
import usePagination from "../../hooks/usePagination";
import AddClient from "../../components/User/AddClient";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient, editClient } from "../../features/client/clientSlice";

const Client = () => {
  const clients = useSelector((state) => state.client);

  const itemsToShow = 6;
  const [currentItem, currentPage, setCurrentPage] = usePagination(itemsToShow);

  // const [searchTerm, setSearchTerm] = useState("");
  // const [clients] = useState(clientsData);

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  const dispatch = useDispatch();

  return (
    <div className="clients-container w-full h-full flex flex-col items-center p-6 bg-gray-100">
      <div className="relative w-full mb-3">
        <h1 className="text-2xl mb-6">Add Client</h1>
        <div className="flex gap-x-3">
          <AddClient />
        </div>
      </div>
      <div className="w-full h-full flex flex-col p-4 bg-white grow">
        <div className="flex items-center gap-x-6">
          <h2 className="flex-1 text-lg font-medium text-gray-800">Clients</h2>
          <form className="searchbar">
            <SearchBox />
          </form>
          <Button title="filter">
            <FaFilter />
          </Button>
          <ExcelExport excelData={clients} fileName={"clients"} />
        </div>
        <div className="relative overflow-x-auto mt-4 grow">
          <table className="w-full text-sm text-gray-700 text-left">
            <thead className="text-xs text-gray-900 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="p-3">
                  ID
                </th>
                <th scope="col" className="p-3">
                  Partner name
                </th>
                <th scope="col" className="p-3">
                  <select className="uppercase bg-transparent">
                    <option value="" disabled selected>
                      Assigned sales representative
                    </option>
                    <option value="optionText1">Option Text 1</option>
                    <option value="optionText2">Option Text 2</option>
                    <option value="optionText3">Option Text 3</option>
                  </select>
                </th>
                <th scope="col" className="p-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {clients
                .map((client, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="p-3">{client.id}</td>
                    <td className="p-3">{client.partner_name}</td>
                    <td className="p-3">{client.partner_rep_name}</td>
                    <td className="p-3">
                      <button onClick={() => dispatch(editClient(client.id))}>
                        <FaEdit />
                      </button>
                      <button onClick={() => dispatch(deleteClient(client.id))}>
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
          totalItems={clients.length}
          itemsToShow={itemsToShow}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          start={currentItem.start}
          end={currentItem.end}
        />
      </div>
    </div>
  );
};

export default Client;
