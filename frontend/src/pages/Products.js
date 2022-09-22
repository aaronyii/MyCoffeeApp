import { Fragment } from "react";
import Card from "../components/UI/Card";
import axios from "axios";

const Products = (props) => {
  const addToCartHandler = () => {};
  return (
    <Fragment>
      <div className="mt-5 flex p-10 justify-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-2">Products</h1>
      </div>
      <div className="p-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 ">
        <Card>
          <div>
            <img
              className="w-full "
              src="https://cdn.tasteatlas.com/images/ingredients/29bbe7a28b434b76a6205910a3b906e4.jpg?mw=1300"
              alt="product 1"
            />
            <div className="px-6 py-4">
              <div className="flex justify-between ">
                <div className="font-bold text-xl mb-2">Cafe Latte</div>
                <div className="text-green-500 font-bold text-xl">$4.99</div>
              </div>
              <p className="text-gray-700 ">
                Caffè latte (caffè e latte) is an espresso-based coffee that has
                a somewhat vague origin. It consists of an espresso that is
                topped with steamed and sometimes lightly frothed milk. The
                usual ratio is 1:3 in favor of milk, but this often varies.
              </p>
            </div>
            {/* Add to Cart Button */}
            <div className="flex justify-center">
              <button
                className=" border rounded bg-gray-100 text-xl bold px-5"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </Card>

        <Card>
          <div>
            <img
              className="w-full "
              src="https://cdn.tasteatlas.com/images/ingredients/6eb251b10b7a4a93b7a14132e99ccac6.jpg?mw=1300"
              alt="product 2"
            />
            <div className="px-6 py-4">
              <div className="flex justify-between ">
                <div className="font-bold text-xl mb-2">Dalgona Coffee</div>
                <div className="text-green-500 font-bold text-xl">$6.99</div>
              </div>
              <p className="text-gray-700 ">
                Dalgona is a frothy whipped coffee that is served on top of
                milk. It became internationally known as a South Korean
                beverage, similar versions are common in other Asian countries.
                The combination is then whipped until it achieves caramel-like
                color and foamy texture.
              </p>
            </div>
            {/* Add to Cart Button */}
            <div className=" flex justify-center">
              <button
                className="border rounded bg-gray-100 text-xl bold px-5"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </Card>

        <Card>
          <div>
            <img
              className="w-full"
              src="https://cdn.tasteatlas.com/images/ingredients/d69f387f38f143b3aa31641d3c7f5925.jpg?mw=1300"
              alt="product 3"
            />
            <div className="px-6 py-4">
              <div className="flex justify-between ">
                <div className="font-bold text-xl mb-2">Egg Coffee</div>
                <div className="text-green-500 font-bold text-xl">$5.99</div>
              </div>
              <p className="text-gray-700 ">
                Egg coffee is a sweet and dense Vietnamese beverage that
                traditionally consists of strong black coffee that is mixed with
                a combination of egg yolks and sweetened condensed milk. The
                coffee is mostly made using a traditional Vietnamese phin filter
                in which the coffee is brewed and then slowly dripped in a cup.
              </p>
            </div>
            {/* Add to Cart Button */}
            <div className=" flex justify-center">
              <button
                className="border rounded bg-gray-100 text-xl bold px-5"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default Products;
