import { useEffect } from "react";
import { ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@contexts/index";
import logo from "@assets/images/logos/logo.png";
import useIsUserAdmin from "@hooks/useIsUserAdmin";
import useFirebaseAuth from "@hooks/useFirebaseAuth";
import google_login from "@assets/images/google_login.png";

const Login = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useAppContext();
  const { firebaseGoogleAuth } = useFirebaseAuth();
  const { findIsUserAdmin } = useIsUserAdmin();

  const styleThirdParty = {
    border: "1px solid lightgray",
    // width: '400px',
    margin: "30px auto",
    borderRadius: "50px",
    cursor: "pointer",
    background: "whitesmoke",
  };

  const handleLogin = async () => {
    console.log("Google");

    const authResult = await firebaseGoogleAuth();
    const isAdmin = await findIsUserAdmin(authResult.email);

    setUserInfo({ ...authResult, isAdmin });

    navigate(ROUTES.DASHBOARD_ADD_SERVICE);

    /*
    handleGoogleLogin(history, from).then((res) => {
      // if in admin then change the from

      isUserAdmin(res.email)
        .then((isAdmin) => {
          res.isAdmin = isAdmin;
          setLoggedInUser(res);
         
          if (isAdmin) {
            from.pathname = "/dashboard/addService";
          }
        })
        .then(() => {
          history.replace(from);
        });
    });
    */
  };

  useEffect(() => {
    console.log("userInfo:", userInfo);
  }, [userInfo]);

  return (
    <div className="d-flex flex-column align-items-center m-5">
      <img
        src={logo}
        width="150"
        className="d-inline-block align-top mt-3 img-fluid"
        alt="React Bootstrap logo"
        onClick={() => navigate(ROUTES.HOME)}
        style={{ cursor: "pointer" }}
      />

      <div
        className={
          "login-div d-flex flex-column justify-content-center align-items-center px-lg-5"
        }
      >
        <h3>Login With</h3>
        <div style={styleThirdParty} className="">
          <h5 className="my-2 mx-5 " onClick={handleLogin}>
            <img
              className="img-fluid"
              style={{ width: "40px" }}
              src={google_login}
              alt=""
            />{" "}
            <span className="ms-3">Continue with Google</span>
          </h5>
        </div>

        <p>
          Don't have an account{" "}
          <a href="#" onClick={handleLogin}>
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
