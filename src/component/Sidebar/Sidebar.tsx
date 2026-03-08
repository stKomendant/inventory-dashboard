import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-800 p-5">
      <h2 className="text-xl font-bold mb-8">Inventory</h2>

      <nav className="flex flex-col gap-4">
        <SidebarLink to="/" text="Dashboard" />
        <SidebarLink to="/products" text="Products" />
        <SidebarLink to="/orders" text="Orders" />
      </nav>
    </div>
  );
};

export default Sidebar;
