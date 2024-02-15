import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/NavBar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="flex flex-col max-w-[1400px] mx-auto">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Main;
