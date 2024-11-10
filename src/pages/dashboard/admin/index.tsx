import Sidebar, { SidebarItem } from "@components/Sidebar";
import Temp from "@router/temp";

import { Outlet } from "react-router-dom";
import {
  faClipboardList,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { PATHS } from "@constants/paths";

const sidebarAdmin: SidebarItem[] = [
  {
    id: 1,
    icon: faPlus,
    title: "Add Service",
    url: PATHS.ADMIN.ADD_SERVICE,
  },

  {
    id: 2,
    icon: faClipboardList,
    title: "Service list",
    url: PATHS.ADMIN.SERVICE_LIST,
  },

  {
    id: 3,
    icon: faUserPlus,
    title: "Make Admin",
    url: PATHS.ADMIN.MAKE_ADMIN,
  },
];

const AdminLayout = () => {
  return (
    <>
      <Temp className="m-2 border border-2 border-primary" />

      <div className="border border-2 border-danger d-flex ">
        <Sidebar sidebarItems={sidebarAdmin} />
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
