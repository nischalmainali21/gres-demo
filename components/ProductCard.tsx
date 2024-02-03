import React from "react";

import { ProductType } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  product: ProductType;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group mb-4">
      <div className="relative mx-2 my-2 h-[290px] rounded-xl border shadow-md">
        {product.thumbnail && (
          <>
            <Image
              alt={product.title}
              src={product.thumbnail}
              fill
              sizes="(min-width: 200px) 50vw,(min-width:768px) 100vw"
              className="rounded-xl"
              priority
            />
          </>
        )}
      </div>
      <div className="mt-2 flex flex-col items-center gap-1">
        {/* upon hovering the whole container underline product title */}
        <span className="text-lg font-bold underline-offset-2 group-hover:underline">
          {product.title
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join(" ")}
        </span>
        <div className="flex items-center gap-1">
          <span className="text text-sm font-light line-through">
            &#36;{product.price}
          </span>
          <span className="text-xl font-bold">
            &#36;
            {Math.floor(
              product.price -
                (product.discountPercentage * product.price) / 100,
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
