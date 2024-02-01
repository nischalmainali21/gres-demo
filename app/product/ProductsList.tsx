"use client";
import React, { useEffect, useState } from "react";
import { ProductType, ProductsDataType } from "@/types";
import ProductCard from "../../components/ProductCard";

type ProductListProps = {
  limit: number;
  currentPage: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
};

async function getProducts(currentPage: number, limit: number) {
  const skip = (currentPage - 1) * limit;
  const response = await fetch(
    `https://dummyjson.com/auth/products/?limit=${limit}${
      skip > 0 ? `&skip=${skip}` : ""
    }`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJoYmluZ2xleTEiLCJlbWFpbCI6ImhiaW5nbGV5MUBwbGFsYS5vci5qcCIsImZpcnN0TmFtZSI6IlNoZWxkb24iLCJsYXN0TmFtZSI6IlF1aWdsZXkiLCJnZW5kZXIiOiJtYWxlIiwiaW1hZ2UiOiJodHRwczovL3JvYm9oYXNoLm9yZy9TaGVsZG9uLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcwNjc4NTUyOCwiZXhwIjoxNzA2Nzg5MTI4fQ.CIgqqu_OxrLc1MF9OpTkWbn4cdyhW9b8SDIJViNIis0",
      },
    },
  );
  return response.json();
}

const ProductsList: React.FC<ProductListProps> = ({
  currentPage,
  limit,
  setTotalPages,
}) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productsData: ProductsDataType = await getProducts(
        currentPage,
        limit,
      );
      const products = productsData.products;
      setTotalPages(Math.ceil(productsData.total / limit));
      setProducts(products);
    };
    fetchProducts();
  }, [currentPage]);

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
    </div>
  );
};

export default ProductsList;
