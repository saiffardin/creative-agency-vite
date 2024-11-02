import { useState } from "react";
import Home from "@pages/home";
import Login from "@pages/login";
import { PATHS } from "@constants/paths";
import { UserInfo } from "@contexts/types";
import { AppContext } from "@contexts/index";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "@router/PrivateRoutes";

function AppRouter() {
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo }}>
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.LOGIN} element={<Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path={PATHS.DASHBOARD.INDEX}>
            <Route index element={<h1>Dashboard - Home</h1>} />
            <Route
              path={PATHS.DASHBOARD.ORDER}
              element={<h1>Dashboard - Orders</h1>}
            />
            <Route
              path={PATHS.DASHBOARD.ADD_SERVICE}
              element={<h1>Dashboard - Add Service</h1>}
            />
          </Route>
        </Route>

        <Route path={PATHS.NOT_FOUND} element={<h1>Page Not Found</h1>} />
      </Routes>
    </AppContext.Provider>
  );
}

export default AppRouter;
