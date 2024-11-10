import Temp from "@router/temp";
import { Outlet } from "react-router-dom";

const RenderAdminLayout = () => {
  return (
    <>
      <Temp className="m-2 border border-2 border-primary" />

      <Outlet />
    </>
  );
};

export default RenderAdminLayout;
