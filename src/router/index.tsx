import Temp from "./temp";
import Home from "@pages/home";
import Login from "@pages/login";
import { useState } from "react";
import GuestRoutes from "./GuestRoutes";
import { PATHS } from "@constants/paths";
import { UserInfo } from "@contexts/types";
import Error404 from "@components/Error404";
import { AppContext } from "@contexts/index";
import { Route, Routes } from "react-router-dom";
import Order from "@pages/dashboard/client/Order";
import Review from "@pages/dashboard/client/Review";
import PrivateAdminRoutes from "./PrivateAdminRoutes";
import PrivateClientRoutes from "./PrivateClientRoutes";
import MakeAdmin from "@pages/dashboard/admin/MakeAdmin";
import AddService from "@pages/dashboard/admin/AddService";
import ServiceListAdmin from "@pages/dashboard/admin/ServiceListAdmin";
import ServiceListClient from "@pages/dashboard/client/ServiceListClient";

function AppRouter() {
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo }}>
      <Temp />

      <Routes>
        {/* un-auth users routes */}
        <Route element={<GuestRoutes />}>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.LOGIN} element={<Login />} />
        </Route>

        {/* ADMIN routes */}
        <Route element={<PrivateAdminRoutes />}>
          <Route path={PATHS.ADMIN.ADD_SERVICE} element={<AddService />} />
          <Route path={PATHS.ADMIN.MAKE_ADMIN} element={<MakeAdmin />} />
          <Route
            path={PATHS.ADMIN.SERVICE_LIST}
            element={<ServiceListAdmin />}
          />
        </Route>

        {/* CLIENT routes */}
        <Route element={<PrivateClientRoutes />}>
          <Route path={PATHS.CLIENT.ORDER} element={<Order />} />
          <Route path={PATHS.CLIENT.REVIEW} element={<Review />} />
          <Route
            path={PATHS.CLIENT.SERVICE_LIST}
            element={<ServiceListClient />}
          />
        </Route>

        <Route path={PATHS.NOT_FOUND} element={<Error404 />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default AppRouter;
