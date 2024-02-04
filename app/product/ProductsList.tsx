"use client";
import React, { useEffect, useState } from "react";
import { ProductType, ProductsDataType } from "@/types";
import ProductCard from "../../components/ProductCard";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import { obtain } from "../action";
import Category from "@/components/Category";

type ProductListProps = {
  limit: number;
  currentPage: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

async function getProducts(
  currentPage: number,
  limit: number,
  category?: string,
) {
  const userToken = await obtain();
  const skip = (currentPage - 1) * limit;
  let url = "https://dummyjson.com/auth/products";
  if (category) {
    url += `/category/${category}`;
  } else {
    url += `/?limit=${limit}${skip > 0 ? `&skip=${skip}` : ""}`;
  }

  // const response = await fetch(
  //   `https://dummyjson.com/auth/products/?limit=${limit}${
  //     skip > 0 ? `&skip=${skip}` : ""
  //   }`,
  //   {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${userToken?.value}`,
  //     },
  //   },
  // );

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userToken?.value}`,
    },
  });
  return response.json();
}

async function getProductCategories() {
  const userToken = await obtain();
  const response = await fetch(
    `https://dummyjson.com/auth/products/categories`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken?.value}`,
      },
    },
  );
  return response.json();
}

const ProductsList: React.FC<ProductListProps> = ({
  currentPage,
  limit,
  setTotalPages,
  setCurrentPage,
}) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (newCat: string) => {
    setSelectedCategory(newCat);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsData: ProductsDataType = await getProducts(
          currentPage,
          limit,
          selectedCategory,
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
  }, [currentPage, selectedCategory]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategoryLoading(true);
        const categoryData = await getProductCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error(error);
      } finally {
        setCategoryLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-5 ">
        <div className="col-span-1">
          {categoryLoading ? (
            <div className="flex h-screen items-center justify-center text-blue-900">
              <Spinner />
            </div>
          ) : (
            <Category
              categories={categories}
              onSelectCategory={handleCategoryChange}
            />
          )}
        </div>
        <div className="sm:col-span-3 md:col-span-4">
          {loading ? (
            <div className="flex h-screen items-center justify-center text-blue-900">
              <Spinner />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products?.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
