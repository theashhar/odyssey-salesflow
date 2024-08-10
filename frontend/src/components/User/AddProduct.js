import { customAlphabet } from "nanoid";
import { addProduct } from "../../features/product/productSlice";
import Button from "./Button";
import Input, { Select } from "./Input";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

//data
import productLineData from "../../data/productline.json";
import productNoData from "../../data/productNo.json";
import oemData from "../../data/oemData.json";

const leadStatus = ["success", "ongoing", "failed"];

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
  lead_status: "",
  follow_up_date: "",
  remark: "",
};

export default function AddProduct() {
  const dispatch = useDispatch();

  //form functionality
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      const numberic = "1234abcd";
      const nanoid = customAlphabet(numberic, 3);
      dispatch(addProduct({ id: `#${nanoid()}`, ...values }));
      resetForm();
    },
  });

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full flex items-center gap-x-6 border px-6 py-2 mb-3">
        <Select
          label="odessey sales person"
          name="sales_person"
          selected
          value={values.sales_person}
        />
      </div>
      <div className="w-full flex items-center gap-x-6 border px-6 py-2 mb-3">
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
      </div>
      <div className="w-full flex items-center gap-x-6 border px-6 py-2 mb-3">
        <Select
          label="oem"
          name="oem"
          value={values.oem}
          options={oemData}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Select
          label="product line"
          name="product_line"
          options={productLineData}
          value={values.product_line}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Select
          label="product no."
          name="product_no"
          options={productNoData}
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
          value={values.qnty}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
      </div>
      <div className="w-full flex items-center gap-x-6 border px-6 py-2 mb-3">
        <Input
          type="date"
          label="follow-up date"
          name="follow_up_date"
          value={values.follow_up_date}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Select
          label="lead status"
          name="lead_status"
          options={leadStatus}
          value={values.lead_status}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
      </div>
      <Button title="Add" type="submit" />
    </form>
  );
}
