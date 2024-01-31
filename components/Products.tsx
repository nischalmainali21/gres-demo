"use client";
import React, { useState, useEffect } from "react";
import { ProductType, ProductsDataType } from "@/types";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;
  const totalPages = Math.ceil(100 / limit);

  useEffect(() => {
    const fetchProdcuts = async () => {
      try {
        const skip = (currentPage - 1) * limit;
        const response = await fetch(
          `https://dummyjson.com/auth/products/?limit=${limit}${
            skip > 0 ? `&skip=${skip}` : ""
          }`,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJqdHJlbGV2ZW41IiwiZW1haWwiOiJqdHJlbGV2ZW41QG5ocy51ayIsImZpcnN0TmFtZSI6IkFsaXNvbiIsImxhc3ROYW1lIjoiUmVpY2hlcnQiLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL0FsaXNvbi5wbmc_c2V0PXNldDQiLCJpYXQiOjE3MDY3MTMwMDAsImV4cCI6MTcwNjcxNjYwMH0.fufrhyfFtFFjaYMdjmS-8ws5kE2nshnLK5x2HX3gK7A",
            },
          }
        );
        const productsData: ProductsDataType = await response.json();
        setProducts(productsData.products);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchProdcuts();
  }, [currentPage]);

  console.log("🚀 ~ Products ~ products:", products);
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Products;
