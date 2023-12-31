import * as RiIcon from "react-icons/ri";
import { useResponsive } from "../../context/ResponsiveContext";
import { useLogOut } from "../../features/auth/useLogout";

const Header = () => {
  const { isPending, logOut } = useLogOut();
  const { active, setActive } = useResponsive();

  console.log(active);

  return (
    <div className="col-span-2 py-4 border-slate-900 border-b-2 px-3 text-gray-100 w-full">
      <div className="flex items-center justify-between mx-auto container">
        <h2 className="text-3xl font-bold text-blue-500">پِیکار</h2>
        <div className="flex items-center gap-x-5">
          <RiIcon.RiSunLine size={28} />
          <RiIcon.RiMenuLine
            size={28}
            className="cursor-pointer block lg:hidden"
            onClick={() => setActive(!active)}
          />
          <RiIcon.RiLogoutCircleLine
            onClick={logOut}
            className={`text-red-500 cursor-pointer ${
              isPending && "animate-pulse"
            }`}
            size={28}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
