import StatCard from "../../component/StatCard/StatCard";

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <StatCard title="Products" value="128" />
      <StatCard title="Orders" value="32" />
      <StatCard title="Revenue" value="$12,430" />
      <StatCard title="Users" value="542" />
    </div>
  );
}
