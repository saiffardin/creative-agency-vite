import { ROUTES } from "@constants/routes";
import { useAppContext } from "@contexts/index";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const {
    userInfo: { isSignedIn },
  } = useAppContext();

  return isSignedIn ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoutes;
