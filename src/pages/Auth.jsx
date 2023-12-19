import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../features/auth/AuthContainer";
import { useAuthorize } from "./../features/auth/useAuthorize";
import useUser from "./../features/auth/useUser";

const Auth = () => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useAuthorize();
  const { data: user } = useUser();
  const lowerRole = user?.user?.role.toLowerCase();

  useEffect(() => {
    if (isAuthenticated) return navigate(`/${lowerRole}`);
  }, [isAuthenticated, user, isLoading, navigate]);

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="p-2 shadow-md rounded-md border border-blue-700 lg:w-[30%] md:w-[60%] w-[90%]">
        <h1 className="text-2xl font-bold text-center text-gray-100">پِیکار</h1>
        <AuthContainer />
      </div>
    </section>
  );
};

export default Auth;
