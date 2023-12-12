import * as HiIcon from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navlinkClass =
    "flex items-center gap-x-2 hover:bg-blue-100/80 hover:text-blue-900 px-2 py-1.5 rounded-lg  transition-all duration-300";

  return (
    <aside className="border-slate-900 border-l-2 py-4 px-2">
      <ul className="flex flex-col gap-y-4">
        <li>
          <NavLink
            to={"dashboard"}
            className={({ isActive }) =>
              isActive
                ? `${navlinkClass} bg-blue-100/80 text-blue-900`
                : `${navlinkClass} text-gray-600`
            }
          >
            <HiIcon.HiHome size={24} />
            <span>داشبورد</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"projects"}
            className={({ isActive }) =>
              isActive
                ? `${navlinkClass} bg-blue-100/80 text-blue-900`
                : `${navlinkClass} text-gray-600`
            }
          >
            <HiIcon.HiCollection size={24} />
            <span>پروژه ها</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
