"use client";
import React, { useState } from "react";
import InputGroup from "./InputGroup";
import { FaStore } from "react-icons/fa6";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log("formdata", formData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: "username" | "password"
  ) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "atuny0",
          password: "9uQFF1Lh",
        }),
      });

      const data = await response.json();
      console.log("Login Response:", data);

      // Handle the response, update UI, or perform other actions as needed
    } catch (error) {
      console.error("Login failed", error);
      // Handle errors appropriately
    }
  };

  return (
    <div className="shadow-[0_8px_30px_rgb(0,0,0,0.25)] flex  flex-col justify-center items-center  px-6 py-12 gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <FaStore className="w-16 h-14 text-blue-600" />
        </div>
        <span className="font-bold">Welcome</span>
      </div>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <InputGroup
            inputType="text"
            name="username"
            id="username"
            labelText="Username"
            value={formData.username}
            onChange={(e) => handleInputChange(e, "username")}
          />
          <InputGroup
            inputType="password"
            name="password"
            id="password"
            labelText="Password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;