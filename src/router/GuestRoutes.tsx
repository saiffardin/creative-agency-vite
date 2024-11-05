import { ROUTES } from "@constants/routes";
import { useAppContext } from "@contexts/index";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoutes = () => {
  const {
    userInfo: { isSignedIn, isAdmin },
  } = useAppContext();

  const redirectAdmin = <Navigate to={ROUTES.DASHBOARD_ADD_SERVICE} />;
  const redirectClient = <Navigate to={ROUTES.DASHBOARD_ORDER} />;

  if (!isSignedIn) return <Outlet />;
  else if (isAdmin) return redirectAdmin;

  return redirectClient;
};

export default GuestRoutes;
