import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center p-2 sm:grid-cols-2 sm:gap-4 sm:p-4 md:p-8">
      <div className="col-span-1 mb-4 flex flex-col gap-4 sm:mb-0">
        <Skeleton className="h-[350px] w-full rounded-xl sm:h-[460px] xl:h-[500px]" />
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-24 w-full rounded-xl" />
          ))}
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2 sm:ml-4 sm:p-8">
        <Skeleton className="h-[350px] w-[650px] rounded-xl" />
      </div>
    </div>
  );
};
``;
export default Loading;
