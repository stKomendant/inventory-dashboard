import type { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-slate-900 text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-auto">
        <Header />

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
