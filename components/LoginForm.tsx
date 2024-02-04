"use client";
import React from "react";
import InputGroup from "./InputGroup";
import { FaStore } from "react-icons/fa6";
import useFormValidation from "@/hooks/useFormValidation";
import { LoginFormValues } from "@/types";
import { useRouter } from "next/navigation";
import { create } from "@/app/action";

// type LoginResponseType = {
//   email: string;
//   firstName: string;
//   id: number;
//   username: string;
//   lastName: string;
//   gender: string;
//   image: string;
//   token: string;
// };

const LoginForm = () => {
  const router = useRouter();
  const onSubmit = async (formData: LoginFormValues) => {
    // console.log(formData);
    try {
      const usersResponse = await fetch("https://dummyjson.com/users");
      const usersData = await usersResponse.json();

      // Randomly select a user
      const randomUser =
        usersData.users[Math.floor(Math.random() * usersData.users.length)];
      console.log("🚀 ~ handleFormSubmit ~ randomUser:", randomUser);

      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: randomUser.username,
          password: randomUser.password,
          expiresInMins: 1,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        // localStorage.setItem("userToken", data.token);
        await create(data.token);
        router.push("/product");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const { handleSubmit, register, errors } = useFormValidation();
  return (
    <div className="flex flex-col  items-center justify-center gap-4  px-6 py-12 shadow-[0_8px_30px_rgb(0,0,0,0.25)]">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <FaStore className="h-14 w-16 text-myColor-600" />
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
          className="mb-2 me-2 w-full rounded-md bg-myColor-700 px-5 py-1.5 text-sm font-medium text-white hover:bg-myColor-800 focus:outline-none focus:ring-4 focus:ring-myColor-300 dark:bg-myColor-600 dark:hover:bg-myColor-700 dark:focus:ring-myColor-800"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
