import React from "react";

import { ProductType } from "@/types";

interface ProductCardProps {
  product: ProductType;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-red-100">
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
  );
};

export default ProductCard;
