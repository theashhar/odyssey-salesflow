// src/components/AddCategoryPage.js
import React, { useState, useEffect } from 'react';
import './AddCategoryPage.css';
import { saveAs } from 'file-saver';
import oemData from '../../Dummy/category/oemData.json';
import productLineData from '../../Dummy/category/productLineData.json';
import partnerData from '../../Dummy/category/partnerData.json';

const AddCategoryPage = () => {
  const [oem, setOem] = useState('');
  const [productLine, setProductLine] = useState('');
  const [partner, setPartner] = useState('');
  const [oems, setOems] = useState([]);
  const [productLines, setProductLines] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // Load data from JSON files
    setOems(oemData);
    setProductLines(productLineData);
    setPartners(partnerData);
  }, []);

  const addOem = () => {
    setOems([...oems, oem]);
    setOem('');
  };

  const addProductLine = () => {
    setProductLines([...productLines, productLine]);
    setProductLine('');
  };

  const addPartner = () => {
    setPartners([...partners, partner]);
    setPartner('');
  };

  const exportToExcel = () => {
    const dataToExport = { oems, productLines, partners };
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    saveAs(blob, 'categories.json');
  };

  return (
    <div className="add-category-page">
      <h2 className="title">Add Category</h2>
      <div className="form-group">
        <label>Enter OEM:</label>
        <input
          type="text"
          value={oem}
          onChange={(e) => setOem(e.target.value)}
          placeholder="Enter OEM"
        />
        <button className="add-button" onClick={addOem}>Add</button>
      </div>
      <div className="form-group">
        <label>Enter Product Line:</label>
        <input
          type="text"
          value={productLine}
          onChange={(e) => setProductLine(e.target.value)}
          placeholder="Enter Product Line"
        />
        <button className="add-button" onClick={addProductLine}>Add</button>
      </div>
      <div className="form-group">
        <label>Enter Partner:</label>
        <input
          type="text"
          value={partner}
          onChange={(e) => setPartner(e.target.value)}
          placeholder="Enter Partner"
        />
        <button className="add-button" onClick={addPartner}>Add</button>
      </div>

      <h3>Available Categories</h3>
      <div className="available-categories">
        <div className="category-list">
          <h4>OEMs</h4>
          <ul>
            {oems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="category-list">
          <h4>Product Lines</h4>
          <ul>
            {productLines.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="category-list">
          <h4>Partners</h4>
          <ul>
            {partners.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <button className="export-button" onClick={exportToExcel}>Export to Excel</button>
    </div>
  );
};

export default AddCategoryPage;
