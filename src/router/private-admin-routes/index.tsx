import { ROUTES } from "@constants/routes";
import { useAppContext } from "@contexts/index";
import { Navigate } from "react-router-dom";
import RenderAdminLayout from "./RenderAdminLayout";

const PrivateAdminRoutes = () => {
  const {
    userInfo: { isSignedIn, isAdmin },
  } = useAppContext();

  if (!isSignedIn) return <Navigate to={ROUTES.LOGIN} />;
  else if (isAdmin) return <RenderAdminLayout />;

  return <Navigate to={ROUTES.DASHBOARD_CLIENT_ORDER} />;
};

export default PrivateAdminRoutes;
