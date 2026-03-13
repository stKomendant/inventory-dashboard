import { useState } from "react";

type Order = {
  id: number;
  customer: string;
  total: number;
  status: "paid" | "pending" | "cancelled";
};

const OrdersPage = () => {
  const [orders] = useState<Order[]>([
    { id: 76, customer: "John Doe", total: 620, status: "paid" },
    { id: 77, customer: "Alice", total: 140, status: "pending" },
    { id: 78, customer: "Mark", total: 30, status: "cancelled" },
    { id: 79, customer: "Nika", total: 189, status: "paid" },
    { id: 80, customer: "Masha", total: 13, status: "cancelled" },
    { id: 81, customer: "Nikita", total: 432, status: "paid" },
    { id: 82, customer: "Katya", total: 873, status: "pending" },
    { id: 83, customer: "Maks", total: 692, status: "cancelled" },
  ]);

  const [statusFilter, setStatusFilter] = useState<
    "all" | "paid" | "pending" | "cancelled"
  >("all");

  const [search, setSearch] = useState("");
  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search customer..."
        className="bg-slate-800 p-2 rounded mb-4"
      />

      <div className="flex gap-3 mb-4">
        <button className="" onClick={() => setStatusFilter("all")}>
          All
        </button>
        <button onClick={() => setStatusFilter("paid")}>Paid</button>
        <button onClick={() => setStatusFilter("pending")}>Pending</button>
        <button onClick={() => setStatusFilter("cancelled")}>Cancelled</button>
      </div>

      <table className="w-full text-left">
        <thead className="border-b border-slate-700 text-slate-400">
          <tr>
            <th className="pb-3">Order ID</th>
            <th className="pb-3">Customer</th>
            <th className="pb-3">Total</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders
            .filter((order) =>
              statusFilter === "all" ? true : order.status === statusFilter,
            )
            .filter((order) =>
              order.customer.toLowerCase().includes(search.toLowerCase()),
            )

            .map((order) => (
              <tr key={order.id} className="border-b border-slate-700">
                <td className="py-3">#{order.id}</td>
                <td>{order.customer}</td>
                <td>£{order.total}</td>

                <td>
                  {order.status === "paid" ? (
                    <span className="text-green-400">Paid</span>
                  ) : order.status === "pending" ? (
                    <span className="text-yellow-400">Pending</span>
                  ) : (
                    <span className="text-red-400">Cancelled</span>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default OrdersPage;
