import { ROUTES } from "@constants/routes";
import { Navigate } from "react-router-dom";
import { useAppContext } from "@contexts/index";
import RenderClientLayout from "./RenderClientLayout";

const PrivateClientRoutes = () => {
  const {
    userInfo: { isSignedIn, isAdmin },
  } = useAppContext();

  if (!isSignedIn) return <Navigate to={ROUTES.LOGIN} />;
  else if (isAdmin) return <Navigate to={ROUTES.DASHBOARD_ADMIN_ADD_SERVICE} />;

  return <RenderClientLayout />;
};

export default PrivateClientRoutes;
