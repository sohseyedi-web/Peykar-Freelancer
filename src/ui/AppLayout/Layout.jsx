import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <section dir="rtl" className="flex container mx-auto h-screen flex-col">
      <Header />
      <div className="flex h-screen">
        {children}
        <div className="flex-1 overflow-y-auto p-4 px-8">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;
