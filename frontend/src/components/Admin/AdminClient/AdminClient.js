import React, { useState } from "react";
import styles from "./AdminClient.module.css";
import { useSelector } from "react-redux";
// import clientsData from "../../../data/adminclient.json";

const ClientsPage = () => {
  const clients = useSelector((state) => state.client);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSalesPerson, setSelectedSalesPerson] = useState("");
  // const [clients] = useState(clientsData);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSalesPersonChange = (e) => {
    setSelectedSalesPerson(e.target.value);
  };

  return (
    <div className={styles.clients_page}>
      <div className={styles.top_section}>
        <h2>SalesPerson Clients</h2>
        <div className={styles.search_dropdown}>
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
      <div className={styles.clients_list}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Partner Name</th>
              <th>Assigned Sales Rep</th>
              <th>Export</th>
            </tr>
          </thead>
          <tbody>
            {clients.length > 0 ? (
              clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.salesperson}</td>
                  <td>{client.id}</td>
                  <td>{client.partner_name}</td>
                  <td>{client.partner_rep_name}</td>
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
