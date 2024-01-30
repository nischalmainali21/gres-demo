"use client";
import React, { useState } from "react";
import InputGroup from "./InputGroup";
import { FaStore } from "react-icons/fa6";

//!!!max length for both username and password needs to be set.!!!
const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // console.log("formdata", formData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: "username" | "password"
  ) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const usersResponse = await fetch("https://dummyjson.com/users");
      const usersData = await usersResponse.json();
      // console.log("userdata", usersData.users);
      // console.log(Math.floor(Math.random() * usersData.users.length));

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
          <FaStore className="w-16 h-14 text-myColor-600" />
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
          className="w-full text-white bg-myColor-700 hover:bg-myColor-800 focus:ring-4 focus:ring-myColor-300 font-medium rounded-md text-sm px-5 py-1.5 me-2 mb-2 dark:bg-myColor-600 dark:hover:bg-myColor-700 focus:outline-none dark:focus:ring-myColor-800"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
