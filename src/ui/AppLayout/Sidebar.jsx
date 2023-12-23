import { useResponsive } from "../../context/ResponsiveContext";
import Back from "../Back";

const Sidebar = ({ children }) => {
  const { active } = useResponsive();

  return (
    <>
      <Back />
      <aside
        className={`${
          active ? "w-[240px] right-0 top-0" : "-right-28 w-0 top-0"
        } fixed z-50 lg:relative lg:bg-transparent bg-gray-900 h-screen lg:h-auto border-slate-900 border-l-2 py-4 px-2 space-y-3 transition-all duration-300`}
      >
        <ul className="flex flex-col gap-y-4">{children}</ul>
      </aside>
    </>
  );
};

export default Sidebar;
