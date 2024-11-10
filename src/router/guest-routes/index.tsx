import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "@contexts/index";
import { PATHS } from "@constants/paths";
import Temp from "@router/temp";

const GuestRoutes = () => {
  const {
    userInfo: { isSignedIn, isAdmin },
  } = useAppContext();

  const redirectAdmin = <Navigate to={PATHS.ADMIN.ADD_SERVICE} />;
  const redirectClient = <Navigate to={PATHS.CLIENT.ORDER} />;

  if (!isSignedIn)
    return (
      <>
        <Temp className="m-2 border border-2 border-success" />

        <Outlet />
      </>
    );
  else if (isAdmin) return redirectAdmin;
  return redirectClient;
};

export default GuestRoutes;
