import React from "react";

import { ProductType } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  product: ProductType;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border m-4 rounded shadow-md flex flex-col items-center">
      <div>
        {product.thumbnail && (
          <>
            <Image
              alt={product.title}
              src={product.thumbnail}
              width={500}
              height={100}
            />
          </>
        )}
      </div>
      <div className="flex flex-col">
        <p className="truncate font-bold text-lg mt-4 items-start">
          {product.title}
        </p>

        <div className="m-1 p-1">
          <span className="text-bold">Rs. {product.price}</span>
          <span className="text-[0.7rem] absolute top-2 ">
            {Math.floor(
              product.price - (product.discountPercentage * product.price) / 100
            )}
          </span>
        </div>
        <p>{product.rating}</p>
      </div>
      {/* <p>{product.description}</p>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>{product.stock}</p> */}
    </div>
  );
};

export default ProductCard;
