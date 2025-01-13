import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header/>
      <div className="flex-1">
      <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
