import React from "react";
import AuthContainer from "../features/auth/AuthContainer";

const Auth = () => {
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
