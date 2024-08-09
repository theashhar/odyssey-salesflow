import React, { useState } from "react";
import "./AdminClient.css";
import clientsData from "../../../data/adminclient.json";

const ClientsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSalesPerson, setSelectedSalesPerson] = useState("");
  const [clients] = useState(clientsData);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSalesPersonChange = (e) => {
    setSelectedSalesPerson(e.target.value);
  };

  return (
    <div className="clients-page">
      <div className="top-section">
        <h2>SalesPerson Clients</h2>
        <div className="search-dropdown">
          <input
            type="text"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select
            value={selectedSalesPerson}
            onChange={handleSalesPersonChange}
          >
            <option value="">Select SalesPerson</option>
            <option value="salesperson1">SalesPerson 1</option>
            <option value="salesperson2">SalesPerson 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <div className="clients-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Partner Name</th>
              <th>Assigned Order</th>
              <th>Export</th>
            </tr>
          </thead>
          <tbody>
            {clients.length > 0 ? (
              clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.id}</td>
                  <td>{client.partnerName}</td>
                  <td>{client.assignedOrder}</td>
                  <td>
                    <button>Export</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No clients available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientsPage;