"use client";
import React, { useState, useEffect } from "react";
import { ProductType, ProductsDataType } from "@/types";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 9;
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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcwNjc3ODA1NCwiZXhwIjoxNzA2NzgxNjU0fQ.DyGVdGSgMarHthYCiA38KfXk_Oiz6vhdN52OVHSuQkc",
            },
          },
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
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-5 ">
        <div className="col-span-1">Filter</div>
        <div className="sm:col-span-3 md:col-span-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      {/* pagination className and position to be checked */}
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

export default Products;
