import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <header className="my-10 text-center space-y-5">
      <h4 className="text-3xl">
        به <span className="font-bold text-blue-500">پیکار</span> خوش اومدی
      </h4>
      <p className="my-2 font-semibold text-lg">
        پیکار یکی از بهترین پلتفرم‌ها برای برون‌سپاری پروژه و استخدام فریلنسر
      </p>
      <p className="my-2 font-semibold opacity-90">برای ثبت یا دریافت پروژه خیلی راحت وارد پیکار شو</p>
      <Link to={"/join"} className="btn btn--primary w-[150px]">ثبت نام / ورود</Link>
    </header>
  );
};

export default Intro;
