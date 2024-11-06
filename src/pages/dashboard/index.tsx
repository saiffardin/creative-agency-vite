import { ROUTES } from "@constants/routes";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex ">
      <h1 className="border border-2 border-danger">Sidebar</h1>
      <div className="mx-2">
        <Outlet />

        <button onClick={() => navigate(ROUTES.DASHBOARD_CLIENT_ORDER)}>
          Goto to Client Order
        </button>
        <button onClick={() => navigate(ROUTES.DASHBOARD_ADMIN_MAKE_ADMIN)}>
          Goto to Admin MAKE_ADMIN
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
