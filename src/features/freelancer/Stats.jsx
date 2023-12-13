import * as HiIcon from "react-icons/hi";
import Loading from "../../ui/Loading";
import Stat from "../../ui/Stat";

const Stats = ({ loading, proposals }) => {
  const proposalsLen = proposals?.length;
  const numOfAcceptedProject = proposals.map((prj) => prj.status === 2).length;
  const balance = proposals?.reduce(
    (acc, cur) => acc + cur.price,
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
            title={"درخواست ها"}
            value={proposalsLen}
            icon={<HiIcon.HiOutlineDocumentText className="w-20 h-20" />}
            color={"blue"}
          />
          <Stat
            title={"کیف پول"}
            value={balance}
            icon={<HiIcon.HiCurrencyDollar className="w-20 h-20" />}
            color={"green"}
          />
          <Stat
            title={"تایید شده"}
            value={numOfAcceptedProject}
            icon={<HiIcon.HiCollection className="w-20 h-20" />}
            color={"indigo"}
          />
        </div>
      )}
    </section>
  );
};

export default Stats;
