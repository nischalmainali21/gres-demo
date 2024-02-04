import { obtain } from "@/app/action";
import React from "react";
import Navbar from "./Navbar";

const ServeNavbar = async () => {
  const userToken = await obtain();
  if (userToken) {
    return <Navbar userToken={userToken} />;
  }
};

export default ServeNavbar;
