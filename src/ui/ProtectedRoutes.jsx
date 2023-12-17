import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthorize } from "../features/auth/useAuthorize";
import Loading from "./Loading";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorize();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/join");
    if (!isAuthorized && !isLoading) navigate("/", { replace: true });
  }, [isAuthenticated, isAuthorized, navigate, isLoading]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-400">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
  //   return children;
};

export default ProtectedRoutes;
