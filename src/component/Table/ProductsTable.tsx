const products = [
  { id: 1, name: "MacBook Pro", price: "£2612", stock: 12 },
  { id: 2, name: "iPhone 18", price: "£1042", stock: 30 },
  { id: 3, name: "AirPods", price: "£216", stock: 45 },
  { id: 4, name: "Webcam", price: "£120", stock: 8 },
];
const ProductsTable = () => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">Products</h2>

      <table className="w-full text-left">
        <thead className="text-slate-400 border-b border-slate-700">
          <tr>
            <th className="pb-3">Name</th>
            <th className="pb-3">Price</th>
            <th className="pb-3">Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b border-slate-700 hover:bg-slate-700/30"
            >
              <td className="py-3">{product.name}</td>
              <td>{product.price}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    product.stock > 20
                      ? "bg-green-500/20 text-green-400"
                      : product.stock > 10
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {product.stock}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
