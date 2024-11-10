import Temp from "@router/temp";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <>
      <Temp className="m-2 border border-2 border-danger" />

      <Outlet />
    </>
  );
};

export default ClientLayout;
