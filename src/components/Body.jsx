import { Outlet } from "react-router-dom";

import SidebarButton from "./SidebarButton";

const Body = () => {
  return (
    <div className="flex">
      <SidebarButton />
      <Outlet />
    </div>
  );
};

export default Body;
