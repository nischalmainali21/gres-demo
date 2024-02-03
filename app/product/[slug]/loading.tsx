import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 p-2 sm:grid-cols-2 sm:gap-4 sm:p-4 md:p-8">
      <div className="flex flex-col gap-4">
        <Skeleton className="h-[350px] w-full rounded-xl sm:h-[460px] xl:h-[500px]" />
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-24 w-full rounded-xl" />
          ))}
        </div>
      </div>
      <div>
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  );
};
``;
export default Loading;
