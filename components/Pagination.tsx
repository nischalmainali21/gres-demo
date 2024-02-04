import React from "react";

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
    <div>
      {/* <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button> */}
      <div className="flex gap-1">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`relative z-10 inline-flex items-center  rounded-lg px-4 py-2 text-sm font-semibold text-myColor-900 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-myColor-600  ${currentPage === index + 1 ? "bg-myColor-600 text-stone-100" : "bg-red-100"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
