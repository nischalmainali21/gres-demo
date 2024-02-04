import React from "react";
import { Button } from "./ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

type PropsType = {
  currentPage: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
};

const Pagination = ({
  handlePageChange,
  currentPage,
  totalPages,
}: PropsType) => {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="font-semibold">
        Page{" "}
        <span className=" rounded-md border-2 border-myColor-600 p-2 px-4">
          {currentPage}
        </span>
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
