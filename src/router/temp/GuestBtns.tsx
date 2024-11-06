import { ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";

const GuestBtns = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="btn btn-success btn-sm m-2"
        onClick={() => navigate(ROUTES.HOME)}
      >
        Landing page
      </button>

      <button
        className="btn btn-success btn-sm m-2"
        onClick={() => navigate(ROUTES.LOGIN)}
      >
        Login
      </button>
    </>
  );
};

export default GuestBtns;
