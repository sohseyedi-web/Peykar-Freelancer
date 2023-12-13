const Sidebar = ({ children }) => {
  return (
    <aside className="border-slate-900 border-l-2 py-4 px-2">
      <ul className="flex flex-col gap-y-4">{children}</ul>
    </aside>
  );
};

export default Sidebar;
