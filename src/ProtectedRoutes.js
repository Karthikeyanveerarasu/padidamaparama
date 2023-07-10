import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoutes = () => {
  const { isAuth } = useContext(AuthContext);
  const storedAuth = localStorage.getItem("isAuth");
  const isLoggedIn = storedAuth ? JSON.parse(storedAuth) : false;

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
