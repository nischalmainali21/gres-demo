import LoginForm from "@/components/LoginForm";
import React from "react";

const Login = () => {
  return (
    <div className="m-0 flex h-[100vh] items-center justify-center p-4">
      <div className="w-[50vw] min-w-[310px] max-w-[500px]">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
