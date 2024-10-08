import { customAlphabet } from "nanoid";
import { addProduct } from "../features/product/productSlice";
import Button from "./User/Button";
import Input, { Select } from "./User/Input";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

//data
import productLineData from "../data/productline.json";
import oemData from "../data/oemData.json";
import salespersonData from "../data/salesperson.json";

// const leadStatus = ["success", "ongoing", "failed"];

const initialValues = {
  sales_person: "Salesperson 1",
  entry_date: "",
  entry_time: "",
  partner_name: "",
  partner_rep_name: "",
  oem: "",
  product_line: "",
  product_no: "",
  rate_quote: "",
  qnty: "",
  follow_up: [
    {
      lead_status: "ongoing",
      follow_up_date: "",
      remark: "",
    },
  ],
  status: "active",
};

export default function AddProduct({ type }) {
  //redux state
  const dispatch = useDispatch();
  const productLine = useSelector((state) => state.productline_category);
  const oem = useSelector((state) => state.oem_category);
  const salesperson = useSelector((state) => state.salesperson);

  //form functionality
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      const numberic = "1234abcd";
      const nanoid = customAlphabet(numberic, 3);
      dispatch(addProduct({ id: `#${nanoid()}`, status: "active", ...values }));
      resetForm();
    },
  });

  const salespersonArray = salesperson.map((sp, index) => sp.name);
  // console.log(salespersonArray);

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full flex items-center gap-x-6 border px-6 py-2 mb-3">
        {type === "admin" ? (
          <Select
            label="odyssey sales person"
            name="sales_person"
            value={values.sales_person}
            options={salespersonArray}
            onHandleBlur={handleBlur}
            onHandleChange={handleChange}
          />
        ) : (
          <Select
            label="odyssey sales person"
            name="sales_person"
            selected
            value={values.sales_person}
          />
        )}
        <Input
          type="text"
          label="partner name"
          name="partner_name"
          value={values.partner_name}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Input
          type="text"
          label="partner representative name"
          name="partner_rep_name"
          value={values.partner_rep_name}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Input
          type="date"
          label="entry date"
          name="entry_date"
          value={values.entry_date}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Input
          type="time"
          label="entry time"
          name="entry_time"
          value={values.entry_time}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
      </div>
      <div className="w-full flex items-center gap-x-6 border px-6 py-2 mb-3">
        <Select
          label="oem"
          name="oem"
          value={values.oem}
          options={oem}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Select
          label="product line"
          name="product_line"
          options={productLine}
          value={values.product_line}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Input
          type="text"
          label="product no"
          name="product_no"
          value={values.product_no}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Input
          type="text"
          label="rate quote"
          name="rate_quote"
          value={values.rate_quote}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Input
          type="number"
          label="qnty"
          name="qnty"
          min="0"
          value={values.qnty}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
      </div>
      <Button title="Add" type="submit" />
    </form>
  );
}
