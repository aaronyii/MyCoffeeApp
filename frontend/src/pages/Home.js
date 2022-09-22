import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../components/store/auth-context";
const Home = (props) => {
  const cxt = useContext(AuthContext);
  return (
    <Fragment>
      <div className=" sm:text-center lg:text-left ">
        <h1 className="tracking-tight font-extrabold text-4xl sm:text-5xl md:text-6xl ">
          <span className="block text-green-300 xl:inline">
            Premium Coffees
          </span>
          <span className="block text-green-600 xl:inline">
            Non-premium Prices
          </span>
        </h1>
        <p className="text-base mt-3 text-white md:text-xl md:mt-5 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 ">
          At prime properties, we ensure that our clients get the best
          properties at affordable prices. Luxury is our priority and budget is
          our constrain. Pick and choose from 1000+ properties across the globe.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          {cxt.isLoggedIn && (
            <div className="md:m-2">
              <Link
                to="/products"
                className="bg-orange-700 text-amber-200 px-8 py-3 flex justify-center rounded-md "
              >
                Explore our coffee products
              </Link>
            </div>
          )}
          <div className="md:m-2">
            <div className="bg-orange-200 text-amber-700 px-8 py-3 flex justify-center rounded-md mt-2 sm:mt-0">
              Check us out
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
