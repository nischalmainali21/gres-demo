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
      <button
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
      </button>
    </div>
  );
};

export default Pagination;
