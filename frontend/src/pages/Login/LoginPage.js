import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/User/Button";
import Input, { Select } from "../../components/User/Input";
import { useFormik } from "formik";

const initialValues = {
  user_type: "",
  username: "",
  password: "",
};

const user_types = ["Admin", "User"];

export default function LoginPage() {
  const navigate = useNavigate();

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      if (values.user_type === "Admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
      resetForm();
    },
  });

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <span className="flex items-center mb-6 text-3xl font-semibold text-gray-900">
          Odyssey Salesflow
        </span>
        <div className="w-full bg-white shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in
            </h1> */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <Select
                label="select user type"
                name="user_type"
                options={user_types}
                value={values.user_type}
                onHandleBlur={handleBlur}
                onHandleChange={handleChange}
              />
              <Input
                type="text"
                label="username"
                name="username"
                value={values.username}
                onHandleBlur={handleBlur}
                onHandleChange={handleChange}
              />

              <Input
                type="password"
                label="password"
                name="password"
                value={values.password}
                onHandleBlur={handleBlur}
                onHandleChange={handleChange}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  {/* <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div> */}
                  {/* <div className="ml-3 text-sm">
                    <label
                      for="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div> */}
                </div>
                <Link
                  to="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <Button title="Sign in" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
