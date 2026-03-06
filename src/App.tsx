import Layout from "./component/Layout/Layout";
import Sidebar from "./component/Layout/Sidebar";

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="flex-1 p8">Dashboard</div>
    </Layout>
  );
};

export default App;
