import React from "react";
import { Link } from "react-router-dom";
import useUser from "./../auth/useUser";

const Navbar = () => {
  const { data: user, isLoading,role } = useUser();

  return (
    <nav className="py-4 border-b-2 border-slate-800" dir="rtl">
      <div className="flex items-center justify-between max-w-7xl mx-auto container lg:px-0 px-3">
        <h1 className="text-3xl font-bold text-blue-500">پِیکار</h1>
        {!user ? (
          <Link to={"/join"} className="btn btn--primary w-[180px] px-2">
            ورورد / ثبت نام
          </Link>
        ) : (
          <Link to={`/${role}`} className="btn btn--success px-2 w-[180px]">
            {user?.user?.name}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
