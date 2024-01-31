"use client";
import React, { useState, useEffect } from "react";
import { ProductType, ProductsDataType } from "@/types";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const totalPages = 10;

  useEffect(() => {
    const fetchProdcuts = async () => {
      try {
        const skip = (currentPage - 1) * limit;
        // console.log("skip", skip);
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
      <div className="flex flex-col gap-4">
        {products?.map((product) => (
          <div key={product.id} className="bg-red-100">
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
            <p>{product.stock}</p>
            <p>{product.thumbnail}</p>
            <p>{product.discountPercentage}</p>
          </div>
        ))}
      </div>
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
    </div>
  );
};

export default Products;
