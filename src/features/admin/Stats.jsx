import * as HiIcon from 'react-icons/hi'
import Loading from '../../ui/Loading'
import Stat from '../../ui/Stat'

const Stats = ({loading,projects,categories,users}) => {

  const projectsLen = projects?.length;
  const categoriesLen = categories?.length;
  const usersLen = users?.length;

  return (
    <section className="my-3">
      <h6 className="lg:text-3xl md:text-xl text-lg font-semibold text-blue-600">
        آمار کلی
      </h6>

      <p className="my-2 ">در یک نما خلاصه ای از آمار خود را ببینید</p>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-between flex-wrap my-3  gap-y-3">
          <Stat
            title={"تعداد کاربران"}
            value={usersLen}
            icon={<HiIcon.HiOutlineUsers className="w-20 h-20" />}
            color={"blue"}
          />
          <Stat
            title={"تعداد پروژه ها"}
            value={projectsLen}
            icon={<HiIcon.HiCollection className="w-20 h-20" />}
            color={"green"}
          />
          <Stat
            title={"تعداد دسته بندی ها"}
            value={categoriesLen}
            icon={<HiIcon.HiOutlineTemplate className="w-20 h-20" />}
            color={"indigo"}
          />
        </div>
      )}
    </section>
  )
}

export default Stats