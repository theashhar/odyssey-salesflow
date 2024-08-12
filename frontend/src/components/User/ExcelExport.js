import React from "react";
import { saveAs } from "file-saver";
import XLSX from "sheetjs-style";
import Button from "./Button";
import { FaFileExcel } from "react-icons/fa";

const ExcelExport = ({ excelData, fileName }) => {
  const exportToExcel = () => {
    const flattenedData = excelData.map(item => {
      if (item.follow_up && item.follow_up.length > 0) {
        return item.follow_up.map(followUp => ({
          sales_person: item.sales_person,
          id: item.id,
          entry_date: item.entry_date,
          entry_time: item.entry_time,
          partner_name: item.partner_name,
          partner_rep_name: item.partner_rep_name,
          oem: item.oem,
          product_line: item.product_line,
          product_no: item.product_no,
          rate_quote: item.rate_quote,
          qnty: item.qnty,
          follow_up_date: followUp.follow_up_date,
          lead_status: followUp.lead_status,
          remark: followUp.remark,
          status: item.status
        }));
      } else {
        return {
          sales_person: item.sales_person,
          id: item.id,
          entry_date: item.entry_date,
          entry_time: item.entry_time,
          partner_name: item.partner_name,
          partner_rep_name: item.partner_rep_name,
          oem: item.oem,
          product_line: item.product_line,
          product_no: item.product_no,
          rate_quote: item.rate_quote,
          qnty: item.qnty,
          follow_up_date: "",
          lead_status: "",
          remark: "",
          status: item.status
        };
      }
    }).flat();
    const worksheet = XLSX.utils.json_to_sheet(flattenedData, { header: [
      "sales_person",
      "id",
      "entry_date",
      "entry_time",
      "partner_name",
      "partner_rep_name",
      "oem",
      "product_line",
      "product_no",
      "rate_quote",
      "qnty",
      "follow_up_date",
      "lead_status",
      "remark",
      "status"
    ] });

    XLSX.utils.sheet_add_aoa(worksheet, [
      [
        "Sales Person",
        "ID",
        "Entry Date",
        "Entry Time",
        "Partner Name",
        "Partner Rep Name",
        "OEM",
        "Product Line",
        "Product No",
        "Rate Quote",
        "Quantity",
        "Follow-Up Date",
        "Lead Status",
        "Remark",
        "Status"
      ]
    ], { origin: "A1" });

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
    <Button title="Export" onHandleClick={exportToExcel}>
      <FaFileExcel />
    </Button>
  );
};

export default ExcelExport;
