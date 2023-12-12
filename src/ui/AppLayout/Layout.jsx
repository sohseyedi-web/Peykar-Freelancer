import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <section dir="rtl" className="grid h-screen grid-cols-[15rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <div className="overflow-y-auto p-8">
        <div className="mx-auto max-w-screen-xl">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;
