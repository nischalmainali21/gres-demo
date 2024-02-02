"use client";
import React, { useEffect, useState } from "react";
import { ProductType, ProductsDataType } from "@/types";
import ProductCard from "../../components/ProductCard";
import Spinner from "@/components/Spinner";

type ProductListProps = {
  limit: number;
  currentPage: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
};

async function getProducts(currentPage: number, limit: number) {
  const userToken = localStorage.getItem("userToken");
  const skip = (currentPage - 1) * limit;
  const response = await fetch(
    `https://dummyjson.com/auth/products/?limit=${limit}${
      skip > 0 ? `&skip=${skip}` : ""
    }`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsData: ProductsDataType = await getProducts(
          currentPage,
          limit,
        );
        const products = productsData.products;
        setTotalPages((prev) => (prev = Math.ceil(productsData.total / limit)));
        setProducts(products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage]);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-5 ">
        <div className="col-span-1">Filter</div>
        <div className="sm:col-span-3 md:col-span-4">
          {loading ? (
            <div className="flex h-screen items-center justify-center text-blue-900">
              <Spinner />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
