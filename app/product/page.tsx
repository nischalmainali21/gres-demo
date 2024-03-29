"use client";
import React, { useState } from "react";
import ProductsList from "@/app/product/ProductsList";
import Pagination from "@/components/Pagination";
import { usePage } from "@/context/PageContext";

const Product = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const { currentPage, setCurrentPage } = usePage();
  const [totalPages, setTotalPages] = useState<number>(0);
  const limit = 9;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="relative mt-4">
      <ProductsList
        currentPage={currentPage}
        limit={limit}
        setTotalPages={setTotalPages}
        setCurrentPage={setCurrentPage}
      />

      <div className="flex justify-center md:mr-8 md:justify-end">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Product;
