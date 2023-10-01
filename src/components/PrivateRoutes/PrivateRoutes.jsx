import { Navigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";

function PrivateRoutes() {
  let token = localStorage.getItem("jwt");
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
