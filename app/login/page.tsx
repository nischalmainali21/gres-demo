import LoginForm from "@/components/LoginForm";
import React from "react";

const login = () => {
  return (
    <div className="p-4 m-0 flex justify-center items-center h-[100vh]">
      <div className="w-[50vw] min-w-[310px] max-w-[500px]">
        <LoginForm />
      </div>
    </div>
  );
};

export default login;
