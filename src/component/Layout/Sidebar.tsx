import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-800 p-6">
      <h2 className="text-xl font-bold mb-8">Inventory</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
