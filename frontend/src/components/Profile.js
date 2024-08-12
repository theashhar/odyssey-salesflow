import Button from "./User/Button";
import Input from "./User/Input";
import user_avatar from "../images/user_avatar.jpg";
import { useFormik } from "formik";
import { editUser } from "../features/user-profile/userSlice";
import { useDispatch, useSelector } from "react-redux";

const userInitialValues = {
  username: "Salesperson 1",
  email: "salesperson1@gmail.com",
  phone: "+918975648576",
};
const adminInitialValues = {
  email: "admin1@gmail.com",
  password: "adminpass",
};

export default function Profile({ type }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: type === "admin" ? adminInitialValues : userInitialValues,
    onSubmit: (values) => {
      // console.log(values);
      dispatch(editUser(values));
    },
  });

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full flex items-center gap-x-6 border px-6 py-2 mb-6">
        <div className="flex flex-col items-center font-bold text-center px-6 py-2 mb-6">
          <div className="size-28 rounded-full border cursor-pointer">
            <img
              src={user_avatar}
              alt="avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1>{type === "admin" ? "Admin" : `user : ${user.username}`}</h1>
          <span>{type === "user" && "id : #user231"}</span>
        </div>
        {type === "user" && (
          <Input
            type="text"
            label="name"
            name="username"
            value={values.username}
            onHandleBlur={handleBlur}
            onHandleChange={handleChange}
          />
        )}
        <Input
          type="email"
          label="email"
          name="email"
          value={values.email}
          onHandleBlur={handleBlur}
          onHandleChange={handleChange}
        />
        {type === "user" ? (
          <Input
            type="text"
            label="phone number"
            name="ph_no"
            value={values.phone}
            onHandleBlur={handleBlur}
            onHandleChange={handleChange}
          />
        ) : (
          <Input
            type="password"
            label="password"
            name="password"
            value={values.password}
            onHandleBlur={handleBlur}
            onHandleChange={handleChange}
          />
        )}
      </div>
      <Button title="update" type="submit" />
    </form>
  );
}
