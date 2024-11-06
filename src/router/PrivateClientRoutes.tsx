import { ROUTES } from "@constants/routes";
import { useAppContext } from "@contexts/index";
import { Navigate, Outlet } from "react-router-dom";

const PrivateClientRoutes = () => {
  const {
    userInfo: { isSignedIn, isAdmin },
  } = useAppContext();

  if (!isSignedIn) return <Navigate to={ROUTES.LOGIN} />;
  else if (isAdmin) return <Navigate to={ROUTES.DASHBOARD_ADMIN_ADD_SERVICE} />;

  return <Outlet />;
};

export default PrivateClientRoutes;
