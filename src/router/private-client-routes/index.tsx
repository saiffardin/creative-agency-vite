import { Navigate } from "react-router-dom";
import { useAppContext } from "@contexts/index";
import ClientLayout from "../../pages/dashboard/client";
import { PATHS } from "@constants/paths";

const PrivateClientRoutes = () => {
  const {
    userInfo: { isSignedIn, isAdmin },
  } = useAppContext();

  if (!isSignedIn) return <Navigate to={PATHS.LOGIN} />;
  else if (isAdmin) return <Navigate to={PATHS.ADMIN.ADD_SERVICE} />;

  return <ClientLayout />;
};

export default PrivateClientRoutes;
