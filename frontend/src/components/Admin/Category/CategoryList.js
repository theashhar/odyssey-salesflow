import React from 'react';
import './CategoryList.css';

const CategoryList = ({ title, items }) => {
  return (
    <div className="category-list">
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
