import { customAlphabet } from "nanoid";
import { addOEM } from "../../../features/category/oemSlice";
import { addProductline } from "../../../features/category/productLineSlice";
import { addSalesperson } from "../../../features/salesperson/salespersonSlice";
import Button from "../../User/Button";
import Input, { Select } from "../../User/Input";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

//data
import productLineData from "../../../data/productline.json";
import oemData from "../../../data/oemData.json";
import salespersonData from "../../../data/salesperson.json";

// const leadStatus = ["success", "ongoing", "failed"];

const initialValues = {
  sales_person: "",
  oem: "",
  product_line: "",
};

export default function AddCategory({ type }) {
  //redux state
  const dispatch = useDispatch();

  //form functionality
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(addOEM(values.oem));
      dispatch(addProductline(values.product_line));
      dispatch(addSalesperson({ ...values }));
      resetForm();
    },
  });

  const salespersonArray = salespersonData.map((sp, index) => sp.name);
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
      </div>
      <div className="w-full flex items-center gap-x-6 border px-6 py-2 mb-3">
        <Input
          type="text"
          label="oem"
          name="oem"
          value={values.oem}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Input
          type="text"
          label="product line"
          name="product_line"
          value={values.product_line}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
      </div>
      <Button title="Add" type="submit" />
    </form>
  );
}
