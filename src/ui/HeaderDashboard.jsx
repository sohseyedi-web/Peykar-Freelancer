import React from "react";
import toLocaleDate from "./../utils/toLocalDateString";

const ROLES = {
  ADMIN: "ادمین",
  FREELANCER: "فریلنسر",
  OWNER: "کارفرما",
};

const HeaderDashboard = ({ user }) => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <span>خوش اومدی</span>
        <h3 className="font-bold">{user?.name}</h3>
        ||
        <span className="font-medium">وضعیت : {ROLES[user?.role]}</span>
      </div>
      <p>تاریخ عضویت : {toLocaleDate(user?.createdAt)}</p>
    </header>
  );
};

export default HeaderDashboard;
