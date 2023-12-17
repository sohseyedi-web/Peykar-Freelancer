import React from "react";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import toLocaleDate from "../../../utils/toLocalDateString";

const ROLES = {
  ADMIN: "ادمین",
  FREELANCER: "فریلنسر",
  OWNER: "کارفرما",
};


const UserListRow = ({ user, index }) => {
  const { role } = user;

  return (
    <tr key={user?._id}>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>
        <p className={`${role === "ADMIN" ? "text-green-500 font-bold" : "text-base font-medium"}`}>{user?.name}</p>
      </td>
      <td>{user?.email}</td>
      <td>{ROLES[role]}</td>
      <td>{toPersianNumbers(user?.phoneNumber)}</td>
      <td>{toLocaleDate(user?.createdAt)}</td>
      <td className="text-indigo-500 cursor-pointer">مشاهده اطلاعات</td>
    </tr>
  );
};

export default UserListRow;
