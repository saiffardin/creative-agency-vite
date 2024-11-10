import Home from "@pages/home";
import Login from "@pages/login";
import GuestRoutes from "./guest-routes";
import { PATHS } from "@constants/paths";
import Error404 from "@components/Error404";
import Order from "@pages/dashboard/client/Order";
import Review from "@pages/dashboard/client/Review";
import { createBrowserRouter } from "react-router-dom";
import PrivateAdminRoutes from "./private-admin-routes";
import MakeAdmin from "@pages/dashboard/admin/MakeAdmin";
import PrivateClientRoutes from "./private-client-routes";
import AddService from "@pages/dashboard/admin/AddService";
import ServiceListAdmin from "@pages/dashboard/admin/ServiceListAdmin";
import ServiceListClient from "@pages/dashboard/client/ServiceListClient";

export const createRouter = () => {
  const routes = [
    {
      element: <GuestRoutes />,
      children: [
        {
          path: PATHS.HOME,
          element: <Home />,
        },
        {
          path: PATHS.LOGIN,
          element: <Login />,
        },
      ],
    },

    {
      element: <PrivateAdminRoutes />,
      children: [
        {
          path: PATHS.ADMIN.ADD_SERVICE,
          element: <AddService />,
        },
        {
          path: PATHS.ADMIN.MAKE_ADMIN,
          element: <MakeAdmin />,
        },
        {
          path: PATHS.ADMIN.SERVICE_LIST,
          element: <ServiceListAdmin />,
        },
      ],
    },

    {
      element: <PrivateClientRoutes />,
      children: [
        {
          path: PATHS.CLIENT.ORDER,
          element: <Order />,
        },
        {
          path: PATHS.CLIENT.REVIEW,
          element: <Review />,
        },
        {
          path: PATHS.CLIENT.SERVICE_LIST,
          element: <ServiceListClient />,
        },
      ],
    },

    {
      id: "ERROR",
      path: PATHS.NOT_FOUND,
      element: <Error404 />,
    },
  ];

  return createBrowserRouter(routes);
};
