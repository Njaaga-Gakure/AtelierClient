import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const SharedLayouts = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayouts;
