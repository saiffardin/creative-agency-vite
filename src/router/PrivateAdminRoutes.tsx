import { ROUTES } from "@constants/routes";
import { useAppContext } from "@contexts/index";
import { Navigate, Outlet } from "react-router-dom";

const PrivateAdminRoutes = () => {
  const {
    userInfo: { isSignedIn, isAdmin },
  } = useAppContext();

  if (!isSignedIn) return <Navigate to={ROUTES.LOGIN} />;
  else if (isAdmin) return <Outlet />;

  return <Navigate to={ROUTES.DASHBOARD_ORDER} />;
};

export default PrivateAdminRoutes;
