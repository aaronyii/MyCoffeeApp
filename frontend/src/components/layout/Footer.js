import fb from "../../assets/facebook.png";
import ig from "../../assets/instagram.png";
import gh from "../../assets/github.png";
const Footer = (props) => {
  return (
    <footer className="pt-10 px-4">
      <div className="container justify-between flex flex-col mt-5 justify-between mx-auto space-y-8">
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 mx-20">
          <div className="space-y-3">
            <h3 className="text-gray-400 text-lg font-semibold uppercase tracking-wide">
              Product
            </h3>
            <ul className="space-y-1 text-white">
              <li>
                <div>Features</div>
              </li>
              <li>
                <div>Integrations</div>
              </li>
              <li>
                <div>Pricing</div>
              </li>
              <li>
                <div>FAQ</div>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-gray-400 text-lg font-semibold uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-1 text-white">
              <li>
                <div>Privacy</div>
              </li>
              <li>
                <div>Terms of Service</div>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-gray-400 text-lg font-semibold uppercase tracking-wide">
              Developers
            </h3>
            <ul className="space-y-1 text-white">
              <li>
                <div>Public API</div>
              </li>
              <li>
                <div>Documentation</div>
              </li>
              <li>
                <div>Guides</div>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-gray-400 text-lg font-semibold uppercase tracking-wide space-x-3">
              Social Media
            </h3>
            <div className="flex justify-start">
              <div className="flex items-center pr-1 pt-1 pb-1">
                <img
                  src={fb}
                  className="w-8 h-8 fill-current"
                  alt="Facebook Icon"
                />
              </div>
              <div className="flex items-center p-1">
                <img
                  src={ig}
                  className="w-8 h-8 fill-current"
                  alt="Instagram Icon"
                />
              </div>
              <div className="flex items-center p-1">
                <img
                  src={gh}
                  className="w-8 h-8 fill-current"
                  alt="GitHub Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm py-6 ">
        ©️ 1968 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
