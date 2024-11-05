import Home from "@pages/home";
import Login from "@pages/login";
import { useState } from "react";
import GuestRoutes from "./GuestRoutes";
import { PATHS } from "@constants/paths";
import { UserInfo } from "@contexts/types";
import { ROUTES } from "@constants/routes";
import Error404 from "@components/Error404";
import { AppContext } from "@contexts/index";
import Order from "@pages/dashboard/client/Order";
import PrivateAdminRoutes from "./PrivateAdminRoutes";
import PrivateClientRoutes from "./PrivateClientRoutes";
import AddService from "@pages/dashboard/admin/AddService";
import { Route, Routes, useNavigate } from "react-router-dom";

function AppRouter() {
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const navigate = useNavigate();

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo }}>
      <button
        className="btn btn-success btn-sm m-2"
        onClick={() => navigate(ROUTES.HOME)}
      >
        Go to landing page
      </button>

      <button
        className="btn btn-success btn-sm m-2"
        onClick={() => navigate(ROUTES.LOGIN)}
      >
        Go to login
      </button>

      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => navigate(ROUTES.DASHBOARD_ADD_SERVICE)}
      >
        Go to Admin Add Service
      </button>

      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={() => navigate(ROUTES.DASHBOARD_ORDER)}
      >
        Go to Client Order
      </button>

      <Routes>
        <Route element={<GuestRoutes />}>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.LOGIN} element={<Login />} />
        </Route>

        <Route element={<PrivateAdminRoutes />}>
          <Route path={PATHS.ADMIN.ADD_SERVICE} element={<AddService />} />
        </Route>

        <Route element={<PrivateClientRoutes />}>
          <Route path={PATHS.CLIENT.ORDER} element={<Order />} />
        </Route>

        <Route path={PATHS.NOT_FOUND} element={<Error404 />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default AppRouter;
