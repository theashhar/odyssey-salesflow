import React from "react";
import Salesperson from "./Salesperson";
import salespeopleData from "../../data/salesperson.json";
import "./AdminSection.css";
import { FaUser } from "react-icons/fa";
import { FaPlus, FaFileExcel } from "react-icons/fa";

const AdminSection = () => {
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
    <div className="admin-section">
      <div className="top-bar">
        <div className="profile">
          <FaUser size={40} color="#6c5b7b" /> {/* Admin/User Icon */}
          <div className="name">Trail Admin</div>
        </div>
        <div className="actions">
          <button onClick={handleAddNew} title="Add New">
            <FaPlus /> Add New
          </button>
          <button onClick={handleExport} title="Export to Excel">
            <FaFileExcel /> Export
          </button>
        </div>
      </div>
      <div className="salespeople-header">
        <h3>Salespeople</h3>
      </div>
      <div className="salespeople-list">
        <div className="salespeople-table">
          <div className="salesperson-row header">
            <div className="header-item">Profile Pic</div>
            <div className="header-item">Name</div>
            <div className="header-item">ID</div>
            <div className="header-item">Company Assigned</div>
            <div className="header-item">Actions</div>
          </div>
          {salespeopleData.length > 0 ? (
            salespeopleData.map((person) => (
              <Salesperson
                key={person.id}
                name={person.name}
                id={person.id}
                company={person.company}
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
