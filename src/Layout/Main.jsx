import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/NavBar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-gradient-to-r from-base-200 to-pink-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
