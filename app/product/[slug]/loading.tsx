import Spinner from "@/components/Spinner";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 p-2 sm:grid-cols-2 sm:gap-4 sm:p-4 md:p-8">
      <div>
        <Skeleton className="h-[350px] w-full rounded-xl sm:h-[460px] xl:h-[500px]" />
      </div>
      <Skeleton className="h-4 w-[250px]" />
      <div></div>
    </div>
  );
};

export default Loading;
