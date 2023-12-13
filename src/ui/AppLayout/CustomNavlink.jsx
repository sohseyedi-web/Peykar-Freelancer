import { NavLink } from "react-router-dom";

const CustomNavlink = ({ children, to }) => {
  const navlinkClass =
    "flex items-center gap-x-2 hover:bg-blue-100/80 hover:text-blue-900 px-2 py-1.5 rounded-lg  transition-all duration-300";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClass} bg-blue-100/80 text-blue-900`
            : `${navlinkClass} text-gray-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default CustomNavlink;
