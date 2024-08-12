import React, { useState } from "react";
import styles from "./AdminClient.module.css";
import { useSelector } from "react-redux";
// import clientsData from "../../../data/adminclient.json";
import SearchBox from "../../User/SearchBox";
import ExcelExport from "../../User/ExcelExport";

const ClientsPage = () => {
  const clients = useSelector((state) => state.client);
  const salesperson = useSelector((state) => state.salesperson);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSalesPerson, setSelectedSalesPerson] = useState(null);
  // const [clients] = useState(clientsData);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSalesPersonChange = (e) => {
    let newValue =
      e.target.value.toLowerCase() === "all" ? null : e.target.value;
    setSelectedSalesPerson(newValue);
  };

  return (
    <div className={styles.clients_page}>
      <div className={styles.top_section}>
        <h2>SalesPerson Clients</h2>
        <div className={styles.search_dropdown}>
          {/* <input
            type="text"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={handleSearchChange}
          /> */}
          <SearchBox />
          <select
            value={selectedSalesPerson}
            onChange={handleSalesPersonChange}
          >
            <option value="" disabled selected>
              Select SalesPerson
            </option>
            <option value={null}>All</option>
            {salesperson.map((person) => (
              <option key={person.id} value={person.name}>
                {person.name}
              </option>
            ))}
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <div className={styles.clients_list}>
        <div>
          <ExcelExport tableID="adminClientTable" fileName={"admin-clients"} />
        </div>
        <table id="adminClientTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Partner Name</th>
              <th>Assigned Sales Rep</th>
            </tr>
          </thead>
          <tbody>
            {clients.length > 0 ? (
              clients
                .filter((client) =>
                  selectedSalesPerson === null
                    ? client.status === "active"
                    : client.salesperson === selectedSalesPerson
                )
                .map((client) => (
                  <tr key={client.id}>
                    <td>{client.salesperson}</td>
                    <td>{client.id}</td>
                    <td>{client.partner_name}</td>
                    <td>{client.partner_rep_name}</td>
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
