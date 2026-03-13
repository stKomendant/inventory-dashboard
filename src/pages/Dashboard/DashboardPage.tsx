import StatCard from "../../component/StatCard/StatCard";
import SalesChart from "../../component/Chart/SalesChart";
import ProductsTable from "../../component/Table/ProductsTable";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <StatCard title="Products" value="64" />
        <StatCard title="Orders" value="103" />
        <StatCard title="Revenue" value="£11,823" />
        <StatCard title="Users" value="271" />
      </div>

      <SalesChart />
      <ProductsTable />
    </div>
  );
}
