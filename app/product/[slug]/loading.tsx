import Spinner from "@/components/Spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center ">
      <Spinner />
    </div>
  );
};

export default Loading;
