import { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return { products, setProducts };
}
