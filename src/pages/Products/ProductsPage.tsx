import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

const ProductsPage = () => {
  const { products, setProducts } = useProducts();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [search, setSearch] = useState("");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [editingId, setEditingId] = useState<number | null>(null);

  const deletProduct = (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;
    setProducts(products.filter((product) => product.id !== id));
  };

  const addProduct = () => {
    if (!name || !price || !stock) return;

    const newProduct: Product = {
      id: Date.now(),
      name,
      price: Number(price),
      stock: Number(stock),
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
    setStock("");
  };

  const updateProduct = () => {
    setProducts(
      products.map((product) =>
        product.id === editingId
          ? {
              ...product,
              name,
              price: Number(price),
              stock: Number(stock) || 0,
            }
          : product,
      ),
    );

    setEditingId(null);
    setName("");
    setPrice("");
    setStock("");
  };

  return (
    <div className="text-2xl font-bold mb-6">
      <h1>Products</h1>

      <div className="flex gap-4 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product name"
          className="bg-slate-800 p-2 rounded"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="bg-slate-800 p-2 rounded"
        />

        <input
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          className="bg-slate-800 p-2 rounded"
        />

        <button
          disabled={!name || !price || !stock}
          onClick={editingId ? updateProduct : addProduct}
          className="bg-indigo-600 px-4 rounded disabled:opacity-50"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="bg-slate-800 p-2 rounded mb-4 mr-4"
      />

      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        className="bg-slate-700 px-3 py-2 rounded mb-4"
      >
        Sort by price ({sortOrder})
      </button>

      <table className="w-full text-left">
        <thead className="border-b border-slate-700 text-slate-400">
          <tr>
            <th className="pb-3">Name</th>
            <th className="pb-3">Price</th>
            <th className="pb-3">Stock</th>
            <th className="pb-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <p className="text-slate-400">No products yet</p>
          ) : (
            <table className="w-full text-left"></table>
          )}

          {products
            .filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase()),
            )
            .sort((a, b) =>
              sortOrder === "asc" ? a.price - b.price : b.price - a.price,
            )
            .map((product) => (
              <tr key={product.id} className="border-b border-slate-700">
                <td className="py-3">{product.name}</td>
                <td>${product.price}</td>
                <td>
                  {product.stock > 20 ? (
                    <span className="text-green-400">In Stock</span>
                  ) : product.stock > 0 ? (
                    <span className="text-yellow-400">Low Stock</span>
                  ) : (
                    <span className="text-red-400">Out of Stock</span>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => {
                      setEditingId(product.id);
                      setName(product.name);
                      setPrice(String(product.price));
                      setStock(String(product.stock));
                    }}
                    className="text-blue-400"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deletProduct(product.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
