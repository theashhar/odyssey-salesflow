import React from "react";
import { FaEdit, FaTrash, FaUserCog } from "react-icons/fa";
import styles from "./Salesperson.module.css"; // For custom styling

const Salesperson = ({
  name,
  id,
  company,
  onUpdate,
  onRemove,
  onRoleChange,
}) => {
  return (
    <div className={styles.salesperson_row}>
      <div className={styles.data_item}>
        <img
          src="/path/to/profile-pic.jpg"
          alt={name}
          className={styles.profile_pic}
        />
      </div>
      <div className={styles.data_item}>{name}</div>
      <div className={styles.data_item}>{id}</div>
      <div className={styles.data_item}>{company}</div>
      <div className={`${styles.data_item} ${styles.actions}`}>
        <button onClick={() => onUpdate(id)} title="Update Details">
          <FaEdit />
        </button>
        <button onClick={() => onRemove(id)} title="Remove">
          <FaTrash />
        </button>
        <button onClick={() => onRoleChange(id)} title="Change Role">
          <FaUserCog />
        </button>
      </div>
    </div>
  );
};

export default Salesperson;
