import React from "react";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import toLocaleDate from "../../../utils/toLocalDateString";
import { useState } from "react";
import Modal from './../../../ui/Modal';
import ChangeUserStatus from "./ChangeUserStatus";

const ROLES = {
  ADMIN: "ادمین",
  FREELANCER: "فریلنسر",
  OWNER: "کارفرما",
};


const UserListRow = ({ user, index }) => {
  const { role } = user;
  const [open,setOpen] = useState(false);

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
      <td>
        <Modal
          onClose={() => setOpen(!open)}
          open={open}
          title={"تغییر وضعیت کاربر"}
        >
          <ChangeUserStatus
            onClose={() => setOpen(!open)}
            userId={user?._id}
          />
        </Modal>
        <button className="text-indigo-400" onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </tr>
  );
};

export default UserListRow;
