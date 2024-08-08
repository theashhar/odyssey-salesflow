import React from "react";
import { saveAs } from "file-saver";
import XLSX from "sheetjs-style";
import Button from "./Button";
import { FaFileExcel } from "react-icons/fa";

const ExcelExport = ({ excelData, fileName }) => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(excelData);
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
