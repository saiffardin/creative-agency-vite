import Temp from "@router/temp";
import React from "react";
import { Outlet } from "react-router-dom";

const RenderGuestLayout = () => {
  return (
    <>
      <Temp className="m-2 border border-2 border-success" />

      <Outlet />
    </>
  );
};

export default RenderGuestLayout;
