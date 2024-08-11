import React from "react";
import { saveAs } from "file-saver";
import XLSX from "sheetjs-style";
import Button from "./Button";
import { FaFileExcel } from "react-icons/fa";

const ExcelExport = ({ excelData, fileName }) => {
  function flattenJson(json, parentKey = "", separator = ".") {
    const result = {};
    for (const key in json) {
      const value = json[key];
      const newKey = parentKey ? `${parentKey}${separator}${key}` : key;
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        Object.assign(result, flattenJson(value, newKey, separator));
      } else {
        result[newKey] = value;
      }
    }
    return result;
  }

  const exportToExcel = () => {
    const flattenedData = excelData.map((item) => flattenJson(item));

    const worksheet = XLSX.utils.json_to_sheet(flattenedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, `${fileName}.xlsx`);
  };

  return (
    <Button title="export" onHandleClick={exportToExcel}>
      <FaFileExcel />
    </Button>
  );
};

export default ExcelExport;
