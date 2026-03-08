import { NavLink } from "react-router-dom";

type SidebarLinkProps = {
  text: string;
  to: string;
};

const SidebarLink = ({ text, to }: SidebarLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
      }
    >
      {text}
    </NavLink>
  );
};

export default SidebarLink;
