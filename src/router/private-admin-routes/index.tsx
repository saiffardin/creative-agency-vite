import { useAppContext } from "@contexts/index";
import { Navigate } from "react-router-dom";
import AdminLayout from "../../pages/dashboard/admin";
import { PATHS } from "@constants/paths";

const PrivateAdminRoutes = () => {
  const {
    userInfo: { isSignedIn, isAdmin },
  } = useAppContext();

  if (!isSignedIn) return <Navigate to={PATHS.LOGIN} />;
  else if (isAdmin) return <AdminLayout />;

  return <Navigate to={PATHS.CLIENT.ORDER} />;
};

export default PrivateAdminRoutes;
