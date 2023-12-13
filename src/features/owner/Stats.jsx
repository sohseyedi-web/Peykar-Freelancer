import * as HiIcon from "react-icons/hi";
import Stat from "../../ui/Stat";
import Loading from "./../../ui/Loading";

const Stats = ({ loading, projects, user }) => {
  const projectLen = projects?.length;
  const numOfAcceptedProject = projects?.map((prj) => prj.status === 2).length;
  const numOfProposals = projects?.reduce(
    (acc, cur) => cur.proposals.length + acc,
    0
  );

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
            title={"پروژه ها"}
            value={projectLen}
            icon={<HiIcon.HiOutlineViewGrid className="w-20 h-20" />}
            color={"blue"}
          />
          <Stat
            title={"پروژه های واگذار شده"}
            value={numOfAcceptedProject}
            icon={<HiIcon.HiCurrencyDollar className="w-20 h-20" />}
            color={"green"}
          />
          <Stat
            title={"درخواست ها"}
            value={numOfProposals}
            icon={<HiIcon.HiCollection className="w-20 h-20" />}
            color={"indigo"}
          />
        </div>
      )}
    </section>
  );
};

export default Stats;
