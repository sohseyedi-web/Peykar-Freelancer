import UserListHeader from "../features/admin/userList/UserListHeader";
import UserListTable from "../features/admin/userList/UserListTable";

const UserList = () => {
  return (
    <>
      <UserListHeader />
      <hr className="border-slate-900 my-3" />
      <UserListTable />
    </>
  );
};

export default UserList;
