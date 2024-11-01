import { Route, Routes } from "react-router-dom";
import Home from "@pages/home";
import PrivateRoutes from "@router/PrivateRoutes";

import "@styles";

function AppRouter() {
  console.log("VITE_SOME_KEY:", import.meta.env.VITE_ENV_FILE);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<h1>Login Page</h1>} />

      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard">
          <Route index element={<h1>Dashboard - Home</h1>} />
          <Route path="order" element={<h1>Dashboard - Orders</h1>} />
        </Route>
      </Route>

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRouter;
