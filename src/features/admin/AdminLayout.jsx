import * as HiIcon from "react-icons/hi";
import { Helmet } from "react-helmet";
import Layout from "../../ui/AppLayout/Layout";
import Sidebar from "../../ui/AppLayout/Sidebar";
import CustomNavlink from "../../ui/AppLayout/CustomNavlink";

const AdminLayout = () => {
  return (
    <>
      <Helmet>
        <title>پنل ادمین</title>
      </Helmet>
      <Layout>
        <Sidebar>
          <CustomNavlink to={"dashboard"}>
            <HiIcon.HiHome size={24} />
            <span>داشبورد</span>
          </CustomNavlink>
          <CustomNavlink to={"users"}>
            <HiIcon.HiUsers size={24} />
            <span>لیست کاربران</span>
          </CustomNavlink>
          <CustomNavlink to={"projects"}>
            <HiIcon.HiCollection size={24} />
            <span>پروژه ها</span>
          </CustomNavlink>
          <CustomNavlink to={"category"}>
            <HiIcon.HiOutlineTemplate  size={24} />
            <span>دسته بندی ها</span>
          </CustomNavlink>
        </Sidebar>
      </Layout>
    </>
  );
};

export default AdminLayout;
