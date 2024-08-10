import React from "react";
import Salesperson from "./Salesperson";
// import salespeopleData from "../../data/salesperson.json";
import styles from "./AdminSection.module.css";
import { FaUser } from "react-icons/fa";
import { FaPlus, FaFileExcel } from "react-icons/fa";
import AddSalesperson from "./AddSalesperson";
import { useSelector } from "react-redux";

const AdminSection = () => {
  const salespeople = useSelector((state) => state.salesperson);
  console.log(salespeople);

  const handleUpdate = (name) => {
    console.log("Update details for:", name);
    // Implement update logic
  };

  const handleRemove = (name) => {
    console.log("Remove salesperson:", name);
    // Implement remove logic
  };

  const handleRoleChange = (name) => {
    console.log("Change role for:", name);
    // Implement role change logic
  };

  const handleAddNew = () => {
    console.log("Add new salesperson");
    // Implement add new logic
  };

  const handleExport = () => {
    console.log("Export to Excel");
    // Implement export logic
  };

  return (
    <div className={styles.admin_section}>
      <div className={styles.top_bar}>
        <div className={styles.profile}>
          <FaUser size={40} color="#6c5b7b" /> {/* Admin/User Icon */}
          <div className={styles.name}>Trail Admin</div>
        </div>
        <h3 className="text-2xl">Add Salespeople</h3>
        <AddSalesperson />
      </div>
      <div className={styles.salespeople_header}>
        <h3>Salespeople</h3>
        <div className={styles.actions}>
          <button onClick={handleExport} title="Export to Excel">
            <FaFileExcel /> Export
          </button>
        </div>
      </div>
      <div className={styles.salespeople_list}>
        <div className={styles.salespeople_table}>
          <div className={`${styles.salesperson_row} ${styles.header}`}>
            <div className={styles.header_item}>Profile Pic</div>
            <div className={styles.header_item}>Name</div>
            <div className={styles.header_item}>ID</div>
            <div className={styles.header_item}>Company Assigned</div>
            <div className={styles.header_item}>Actions</div>
          </div>
          {salespeople.length > 0 ? (
            salespeople.map((salesperson) => (
              <Salesperson
                key={salesperson.id}
                name={salesperson.name}
                id={salesperson.id}
                sales
                company={salesperson.company}
                onUpdate={handleUpdate}
                onRemove={handleRemove}
                onRoleChange={handleRoleChange}
              />
            ))
          ) : (
            <p>No salespeople available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSection;
