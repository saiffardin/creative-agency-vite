import { ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";

const ClientBtns = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={() => navigate(ROUTES.DASHBOARD_CLIENT_ORDER)}
      >
        Client Order
      </button>
    </>
  );
};

export default ClientBtns;
