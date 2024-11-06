import { ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";

const AdminBtns = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => navigate(ROUTES.DASHBOARD_ADMIN_ADD_SERVICE)}
      >
        Admin Add Service
      </button>
    </>
  );
};

export default AdminBtns;
