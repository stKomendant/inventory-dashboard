import Layout from "./component/Layout/Layout";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/DashboardPage";
import Orders from "./pages/Orders/OrdersPage";
import Products from "./pages/Products/ProductsPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Layout>
  );
};

export default App;
