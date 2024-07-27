import "./App.css";
import { useFormik } from "formik";

type genaral_object = {
  [key: string]: string;
};

function App() {
  const validate = (values: genaral_object) => {
    const errors: genaral_object = {};
    if (!values.email) errors.email = "required a email field";
    if (!values.password) errors.password = "required a password field";
    return errors;
  };

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      if (values?.email === "test@gmail.com" && values?.password === "123")
        alert("login sucessful.!");
      else alert("invalid deatils");
    },
  });

  return (
    <>
      <div className="main-container">
        <h2 id="main-title">
          Simple login <span>Form</span>
        </h2>
        <form onSubmit={loginForm.handleSubmit}>
          <div className="inputs">
            <label htmlFor="email">Name</label>
            <input
              type="text"
              name="email"
              id="email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
            />
          </div>
          <div className="inputs">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
            />
          </div>
          <input type="submit" value="sbmit" id="submit-btn" />
          {loginForm.errors.email ? (
            <div className="error">{loginForm.errors.email}</div>
          ) : (
            ""
          )}
          {loginForm.errors.password ? (
            <div className="error">{loginForm.errors.password}</div>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
}

export default App;
