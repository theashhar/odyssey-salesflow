import React from 'react';
import { FaEdit, FaTrash, FaUserCog } from 'react-icons/fa';
import './Salesperson.css'; // For custom styling

const Salesperson = ({ name, id, company, onUpdate, onRemove, onRoleChange }) => {
  return (
    <div className="salesperson-row">
      <div className="data-item">
        <img 
          src="/path/to/profile-pic.jpg" 
          alt={name} 
          className="profile-pic" 
        />
      </div>
      <div className="data-item">{name}</div>
      <div className="data-item">{id}</div>
      <div className="data-item">{company}</div>
      <div className="data-item actions">
        <button onClick={() => onUpdate(name)} title="Update Details">
          <FaEdit />
        </button>
        <button onClick={() => onRemove(name)} title="Remove">
          <FaTrash />
        </button>
        <button onClick={() => onRoleChange(name)} title="Change Role">
          <FaUserCog />
        </button>
      </div>
    </div>
  );
};

export default Salesperson;
