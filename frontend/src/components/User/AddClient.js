import { useFormik } from "formik";
import Input, { Select } from "./Input";
import Button from "./Button";
import { addClient } from "../../features/client/clientSlice";
import { useDispatch } from "react-redux";

const initialValues = {
  sales_person: "Salesperson 1",
  partner_name: "",
  partner_rep_name: "",
};

export default function AddClient() {
  const dispatch = useDispatch();

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      dispatch(addClient({ id: "1", ...values }));
      resetForm();
    },
  });

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full flex items-center gap-x-6 border px-6 py-2 mb-3">
        <Select
          label="sales person"
          name="sales_person"
          selected
          value={values.sales_person}
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
          label="assigned sales rep"
          name="partner_rep_name"
          value={values.partner_rep_name}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
      </div>
      <Button title="add" type="submit" />
    </form>
  );
}
