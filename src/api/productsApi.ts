import type { Product } from "../types/Product";

export function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = localStorage.getItem("products");
      resolve(data ? JSON.parse(data) : []);
    }, 1000);
  });
}
