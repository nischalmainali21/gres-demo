import { ProductType } from "@/types";
import React from "react";

export interface PropsType
  extends Omit<ProductType, "id" | "thumbnail" | "images"> {}

const ProductDetailDescription = ({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
}: PropsType) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        {title
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.substring(1))
          .join(" ")}
      </h1>
      <div>{rating}</div>
      <div className="flex items-center gap-1">
        <span className="text text-sm font-light line-through">
          &#36;{price}
        </span>
        <span className="text-xl font-bold">
          &#36;
          {Math.floor(price - (discountPercentage * price) / 100)}
        </span>
      </div>
      <div>{brand}</div>
      <div>{category}</div>
      <div>{stock}</div>
      <div>{description}</div>
    </div>
  );
};

export default ProductDetailDescription;
