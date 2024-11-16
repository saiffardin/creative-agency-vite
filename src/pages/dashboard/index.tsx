// import Temp from "@router/temp";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashNav from "@components/DashNav";
import Sidebar, { SidebarItem } from "@components/Sidebar";

import { useAppContext } from "@contexts/index";

interface Props {
  sidebarItems: SidebarItem[];
}

const Dashboard = ({ sidebarItems }: Props) => {
  const { userInfo } = useAppContext();
  const [activeItem, setActiveItem] = useState(sidebarItems?.[0]);

  return (
    <>
      {/* <Temp className="m-2 border border-2 border-primary" /> */}

      <div className="d-flex">
        <Sidebar
          sidebarItems={sidebarItems}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        <div className="w-100">
          <DashNav
            title={activeItem.title}
            userName={userInfo.displayName || ""}
          />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
