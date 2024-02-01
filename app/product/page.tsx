"use client";
import React, { Suspense, useState } from "react";
import ProductsList from "@/app/product/ProductsList";
import Pagination from "@/components/Pagination";
import Loading from "./loading";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 9;
  const totalPages = Math.ceil(100 / limit);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="relative">
      <Suspense fallback={<Loading />}>
        <ProductsList currentPage={currentPage} limit={limit} />
      </Suspense>

      <div className="absolute -bottom-20 right-10">
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
