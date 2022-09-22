import { Fragment } from "react";
function Contact() {
  return (
    <Fragment>
      <div className="mt-5 flex p-10 justify-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-2">Contact Us</h1>
      </div>
      <div className="mt-5 flex p-10 items-center justify-center">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor=""
                className="block uppercase text-xs text-white font-bold mb-2 tracking-wider"
              >
                First Name
              </label>
              <input
                type="text"
                className="block rounded px-4 py-3 text-white w-full border-green-500 border mb-3"
                placeholder="John"
              />
              <p className="text-sm text-green-500 italic">
                Please fill out this field
              </p>
            </div>

            <div className="w-full md:w-1/2 md:mb-0 px-3">
              <label
                htmlFor=""
                className="block uppercase text-xs text-white font-bold mb-2 tracking-wider"
              >
                Last Name
              </label>
              <input
                type="text"
                className="block rounded px-4 py-3 text-white w-full border-green-500 border"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex mb-6">
            <div className="w-full px-3">
              <label className="block uppercase text-xs text-white font-bold mb-2 tracking-wider">
                Email
              </label>
              <input
                type="email"
                className="block rounded px-4 py-3 text-white w-full border-green-500 border"
                placeholder="example@example.com"
              />
              <p className="mt-3 text-sm text-green-500 italic">
                Please fill out this field
              </p>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="w-full px-3">
              <label className="block uppercase text-xs text-white font-bold mb-2 tracking-wider">
                Message
              </label>
              <textarea
                className="no-resize resize-none appearance-none h-48 block rounded px-4 py-3 text-gray-700
                w-full border-green-500 border"
                placeholder=""
              ></textarea>
              <p className="mt-3 text-sm text-green-500 italic">
                Please fill out this field
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div>
              <button className=" rounded bg-green-400 text-white py-2 px-4 font-semibold mx-2 shadow hover:shadow-green-100 transition delay-150">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Contact;
