import { useState, Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../components/store/auth-context";
import axios from "axios";
const Login = (props) => {
  const navigate = useNavigate();
  const cxt = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/users/login", formData)
      .then((res) => {
        cxt.onLogin(email, password);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => {
        console.log("User does not exist!");
      });

    console.log("Submitted");
  };

  return (
    <Fragment>
      <div className="mt-5 flex p-10 justify-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-2">Login</h1>
      </div>
      <div className="mt-5 flex p-10 items-center justify-center">
        <form className="w-full max-w-lg" onSubmit={submitHandler}>
          <div className="flex mb-6">
            <div className="w-full px-3">
              <label className="block uppercase text-xs text-white font-bold mb-2 tracking-wider">
                Email
              </label>

              <input
                type="email"
                className="block rounded px-4 py-3 w-full border-green-500 border"
                id="email"
                name="email"
                value={email}
                placeholder="Enter Your Email"
                onChange={changeHandler}
              />
              <p className="mt-3 text-sm text-green-500 italic">
                Please fill out this field
              </p>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="w-full px-3">
              <label className="block uppercase text-xs text-white font-bold mb-2 tracking-wider">
                password
              </label>
              <input
                type="password"
                className="block rounded px-4 py-3 
                  w-full border-green-500 border"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={changeHandler}
              />
              <p className="mt-3 text-sm text-green-500 italic">
                Please fill out this field
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <button
              type="submit"
              className=" rounded bg-green-400 text-white py-2 px-4 font-semibold mx-2 shadow hover:shadow-green-100 transition delay-150"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
