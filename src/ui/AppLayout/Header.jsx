import * as RiIcon from "react-icons/ri";
import { useLogOut } from "../../features/auth/useLogout";

const Header = () => {
  const { isPending, logOut } = useLogOut();

  return (
    <div className="col-span-2 py-4 border-slate-900 border-b-2 px-3 text-gray-100">
      <div className="flex items-center justify-between mx-auto container">
        <h2 className="text-3xl font-bold text-blue-500">پِیکار</h2>
        <div className="flex items-center gap-x-5">
          <RiIcon.RiSunLine size={28} />
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
