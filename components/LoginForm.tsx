"use client";
import React from "react";
import InputGroup from "./InputGroup";
import { FaStore } from "react-icons/fa6";
import useFormValidation from "@/hooks/useFormValidation";

//!!!max length for both username and password needs to be set.!!!
type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const { handleSubmit, register, errors } = useFormValidation();
  return (
    <div className="shadow-[0_8px_30px_rgb(0,0,0,0.25)] flex  flex-col justify-center items-center  px-6 py-12 gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <FaStore className="w-16 h-14 text-myColor-600" />
        </div>
        <span className="font-bold">Welcome</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <InputGroup
            inputType="text"
            name="username"
            id="username"
            labelText="Username"
            register={register("username", {
              required: { value: true, message: "Username is required" },
              maxLength: {
                value: 30,
                message: "Username cannot exceed 30 characters",
              },
              minLength: {
                value: 5,
                message: "Username must be at least 5 characters",
              },
            })}
            errors={errors}
          />
          <InputGroup
            inputType="password"
            name="password"
            id="password"
            labelText="Password"
            register={register("password", {
              required: { value: true, message: "Password is required" },
              maxLength: {
                value: 20,
                message: "Password cannot exceed 20 characters",
              },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            errors={errors}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-myColor-700 hover:bg-myColor-800 focus:ring-4 focus:ring-myColor-300 font-medium rounded-md text-sm px-5 py-1.5 me-2 mb-2 dark:bg-myColor-600 dark:hover:bg-myColor-700 focus:outline-none dark:focus:ring-myColor-800"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
