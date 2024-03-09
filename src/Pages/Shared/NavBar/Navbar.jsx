import icon from "../../../assets/Images/Medico.png";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Navbar = () => {
  const navOptions = (
    <>
      <li className="my-1 text-blue-900 hover:text-blue-400">
        <a href="/">Home</a>
      </li>
      <li className="my-1 text-blue-900 hover:text-blue-400">
        <a href="/">About</a>
      </li>
      <li className="my-1 text-blue-900 hover:text-blue-400">
        <a href="/">Departments</a>
      </li>
      <li className="my-1 text-blue-900 hover:text-blue-400">
        <a href="/">Pages</a>
      </li>
      <li className="my-1 text-blue-900 hover:text-blue-400">
        <a href="/">Blog</a>
      </li>
      <li className="my-1 text-blue-900 hover:text-blue-400">
        <a href="/">Contact</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer lg:fixed lg:z-50 font-poppins max-w-[1400px] mx-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar lg:px-8  px-2 py-2 bg-gray-100">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <img className="w-52" src={icon} alt="" />
            </div>
            <div className="flex-none hidden lg:block mr-4">
              <ul className="text-lg">
                <div className="flex space-x-8 justify-center items-center">
                  {navOptions}
                  <li>
                    <a className="flex justify-center gap-2 items-center">
                      <TfiHeadphoneAlt className="h-10 w-10 rounded-full p-2 bg-red-500 text-white" />
                      Help
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="p-14 w-80 min-h-full text-base bg-base-200">
            <div>
            {navOptions}
            <li>
              <a href="/help" className="flex justify-start gap-2 items-center">
                <TfiHeadphoneAlt href="/help" className="h-10 w-10 rounded-full p-2 bg-red-500 text-white" />
                Help
              </a>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
