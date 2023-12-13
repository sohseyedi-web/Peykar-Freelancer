import * as HiIcon from "react-icons/hi";
import CustomNavlink from "../../ui/AppLayout/CustomNavlink";
import Layout from '../../ui/AppLayout/Layout'
import Sidebar from '../../ui/AppLayout/Sidebar'

const FreeLancerLayout = () => {
  return (
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
        <CustomNavlink to={"proposals"}>
          <HiIcon.HiOutlineDocumentText size={24} />
          <span>درخواست ها</span>
        </CustomNavlink>
      </Sidebar>
    </Layout>
  )
}

export default FreeLancerLayout