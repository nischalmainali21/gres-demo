import ImageCarousel from "@/components/ImageCarousel";
import ProductDetailDescription from "@/components/ProductDetailDescription";
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
    <div className="grid h-screen grid-cols-1 items-center justify-center p-2 sm:grid-cols-2 sm:gap-4 sm:p-4 md:p-6">
      <div className="col-span-1 mb-4 sm:mb-0">
        <ImageCarousel images={data.images} title={data.title} />
      </div>
      <div className="col-span-1 flex max-w-[1000px] flex-col gap-2 sm:ml-4">
        <ProductDetailDescription
          title={data.title}
          description={data.description}
          price={data.price}
          discountPercentage={data.discountPercentage}
          rating={data.rating}
          stock={data.stock}
          brand={data.brand}
          category={data.category}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
