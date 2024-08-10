import { useFormik } from "formik";
import Input, { Select } from "../User/Input";
import Button from "../User/Button";
import { addClient } from "../../features/client/clientSlice";
import { useDispatch } from "react-redux";
import { customAlphabet } from "nanoid";
import { addSalesperson } from "../../features/salesperson/salespersonSlice";

const initialValues = {
  name: "",
  id: "",
  password: "",
  company: "",
};

export default function AddSalesperson() {
  const dispatch = useDispatch();

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      dispatch(addSalesperson({ ...values }));
      resetForm();
    },
  });

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full flex items-center gap-x-6 border px-6 py-2 mb-3">
        <Input
          type="text"
          label="name"
          name="name"
          value={values.name}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Input
          type="text"
          label="id"
          name="id"
          value={values.id}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        <Input
          type="text"
          label="password"
          name="password"
          value={values.password}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
      </div>
      <div className="w-full flex items-center gap-x-6 border px-6 py-2 mb-3">
        <Input
          type="text"
          label="assign company"
          name="company"
          value={values.company}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
      </div>

      <Button title="add" type="submit" />
    </form>
  );
}
