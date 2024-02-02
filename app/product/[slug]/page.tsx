import ImageSlider from "@/components/ImageSlider";
import { ProductType } from "@/types";
import React from "react";

type PropsType = {
  params: { slug: number };
};

async function getProductData(id: number) {
  // Perform localStorage action
  // const userToken = localStorage.getItem("userToken");
  // console.log("usertoken", userToken);
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  // console.log("res", res.json());
  return res.json();
}

const ProductDetail = async ({ params }: PropsType) => {
  const data: ProductType = await getProductData(params.slug);
  // console.log("data", data);
  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      <div>
        <ImageSlider images={data.images} title={data.title} />
      </div>
      <div>Product detail</div>
    </div>
  );
};

export default ProductDetail;
