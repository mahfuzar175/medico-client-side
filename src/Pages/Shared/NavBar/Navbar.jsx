import { Link } from "react-router-dom";
import icon from "../../../assets/Images/Medico.png";
import { TfiHeadphoneAlt } from "react-icons/tfi";


const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Departments</Link>
      </li>
      <li>
        <Link>Pages</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer text-blue-900 lg:fixed lg:z-50 font-poppins">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-gradient-to-r from-base-200 to-pink-100 p-2">
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
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal text-lg font-medium">
                <div className="flex justify-center items-center">
                  {navOptions}
                  <li>
                    <Link>
                      <TfiHeadphoneAlt className="h-10 w-10 rounded-full p-2 bg-red-500 text-white" />
                      Help
                    </Link>
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
          <ul className="menu p-4 w-80 min-h-full font-medium text-base bg-base-200">
            {navOptions}
            <li>
              <Link>
                <TfiHeadphoneAlt className="h-10 w-10 rounded-full p-2 bg-red-500 text-white" />
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
