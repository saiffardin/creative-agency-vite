import { ROUTES } from "@constants/routes";
import { Navigate } from "react-router-dom";
import { useAppContext } from "@contexts/index";
import RenderGuestLayout from "./RenderGuestLayout";

const GuestRoutes = () => {
  const {
    userInfo: { isSignedIn, isAdmin },
  } = useAppContext();

  const redirectAdmin = <Navigate to={ROUTES.DASHBOARD_ADMIN_ADD_SERVICE} />;
  const redirectClient = <Navigate to={ROUTES.DASHBOARD_CLIENT_ORDER} />;

  if (!isSignedIn) return <RenderGuestLayout />;
  else if (isAdmin) return redirectAdmin;
  return redirectClient;
};

export default GuestRoutes;
