import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import coffeeIcon from "../../assets/coffee-cup.svg";
import AuthContext from "../store/auth-context";

const MainNavigation = (props) => {
  const cxt = useContext(AuthContext);
  const welcomeText =
    localStorage.getItem("isLoggedIn") === "1"
      ? `Welcome, ${JSON.parse(localStorage.getItem("user")).name}`
      : "";
  const components = !cxt.isLoggedIn ? (
    <Fragment>
      <li className="mx-4 my-6 md:my-0">
        <NavLink
          to="/register"
          className="text-xl hover:text-amber-500 duration-500 font-semibold"
        >
          Registration
        </NavLink>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <NavLink
          to="/login"
          className="text-xl hover:text-amber-500 duration-500 font-semibold"
        >
          Sign In
        </NavLink>
      </li>
    </Fragment>
  ) : (
    <li className="mx-4 my-6 md:my-0">
      <NavLink
        to="/"
        className="text-xl hover:text-amber-500 duration-500 font-semibold"
        onClick={cxt.onLogout}
      >
        Sign Out
      </NavLink>
    </li>
  );

  return (
    <nav className=" bg-white flex items-center md:justify-between sm:flex-wrap shadow-xl fixed w-full opacity-70">
      <div>
        <NavLink to="/" className="flex items-center py-4 px-4">
          <span className="text-3xl font-[Poppins] inline-flex ">Coffee</span>
          <img src={coffeeIcon} alt="Coffee Cup" />
          <span className="text-3xl font-[Poppins] inline-flex ">Paradise</span>
        </NavLink>
      </div>
      <div>
        <span className=" text-xl bold md:text-2xl">{welcomeText}</span>
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 sm:hidden top-[-400px]">
        {cxt.isLoggedIn && (
          <li className="mx-4 my-6 md:my-0">
            <NavLink
              to="/products"
              className="text-xl hover:text-amber-500 duration-500 font-semibold"
            >
              Our Products
            </NavLink>
          </li>
        )}
        {cxt.isLoggedIn && (
          <li className="mx-4 my-6 md:my-0">
            <NavLink
              to="/cart"
              className="text-xl hover:text-amber-500 duration-500 font-semibold"
            >
              Cart
            </NavLink>
          </li>
        )}
        {components}
      </ul>
    </nav>
  );
};

export default MainNavigation;
