import { ProductType } from "@/types";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <Card>
        <CardHeader>
          <CardTitle>
            {title
              .split(" ")
              .map((word) => word[0].toUpperCase() + word.substring(1))
              .join(" ")}
          </CardTitle>
          <CardDescription className="flex gap-4">
            <p>
              <span className="font-semibold">Brand:</span> {brand}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
            <div>
              <span className="font-semibold">Stock:</span> {stock} Left
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className=" flex justify-center">
            <Card className="w-[100%] lg:w-[60%]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-base font-light line-through lg:text-[20px]">
                      &#36;{price}
                    </span>
                    <span className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-[50px]">
                      &#36;
                      {Math.floor(price - (discountPercentage * price) / 100)}
                    </span>
                  </div>
                  <div className="text-base font-bold  sm:font-normal lg:text-[30px]">
                    {discountPercentage}% off
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
          <hr className="my-6" />
          <div className="flex flex-col justify-start">
            <span className="mb-2 text-3xl font-bold">Description:</span>
            <p className="text-xl font-normal">{description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetailDescription;
