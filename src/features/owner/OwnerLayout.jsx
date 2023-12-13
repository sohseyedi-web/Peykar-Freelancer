import { Helmet } from "react-helmet";
import * as HiIcon from "react-icons/hi";
import CustomNavlink from "../../ui/AppLayout/CustomNavlink";
import Layout from "../../ui/AppLayout/Layout";
import Sidebar from "../../ui/AppLayout/Sidebar";

const OwnerDashboard = () => {
  return (
    <>
      <Helmet><title>پنل کارفرما</title></Helmet>
      <Layout>
      <Sidebar>
        <CustomNavlink to={"dashboard"}>
          <HiIcon.HiHome size={24} />
          <span>داشبورد</span>
        </CustomNavlink>
        <CustomNavlink to={"projects"}>
          <HiIcon.HiCollection size={24} />
          <span>پروژه ها</span>
        </CustomNavlink>
      </Sidebar>
    </Layout>
    </>
  );
};

export default OwnerDashboard;
