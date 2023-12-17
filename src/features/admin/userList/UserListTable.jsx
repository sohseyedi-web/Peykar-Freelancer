import React from 'react'
import Loading from '../../../ui/Loading';
import { useListUser } from './../useListUser';
import UserListRow from './UserListRow';

const UserListTable = () => {

    const {isLoading,users} = useListUser();

    if (isLoading) return <Loading />;

  if (!users?.length) return <p>کاربری در سایت ثبت نام نکرده است</p>;



  return (
    <div className="overflow-x-auto rounded-md shadow-md text-gray-100 bg-slate-900">
      <table className="table">
        {/* head */}
        <thead>
          <tr className=" text-gray-100">
            <th>#</th>
            <th>نام کاربری</th>
            <th>ایمیل</th>
            <th>وضعیت</th>
            <th>شماره موبایل</th>
            <th>تاریخ عضویت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <UserListRow key={user._id} index={index} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserListTable