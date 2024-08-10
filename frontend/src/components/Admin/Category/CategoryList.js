import React from "react";
import styles from "./CategoryList.module.css";

const CategoryList = ({ title, items }) => {
  return (
    <div className={styles.category_list}>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
