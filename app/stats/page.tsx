import { ProductsDataType } from "@/types";
import React from "react";
import { obtain } from "../action";
import Piechart from "@/components/Piechart";

interface CategoryCount {
  [category: string]: number;
}

const getCategoryData = async () => {
  const userToken = await obtain();
  try {
    const response = await fetch(
      "https://dummyjson.com/auth/products?limit=0",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken?.value}`,
        },
      },
    );
    if (!response.ok) {
      throw new Error("");
    }
    const data: ProductsDataType = await response.json();

    const categoryCount = data.products.reduce((acc, curr) => {
      const { category } = curr;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as CategoryCount);

    const distributionData = Object.entries(categoryCount).map(
      ([category, count]) => ({
        name: category,
        value: count,
      }),
    );

    return distributionData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const Stats = async () => {
  const categoryData = await getCategoryData();
  // console.log(categoryData);
  return (
    <div>
      <Piechart categoryData={categoryData} />
    </div>
  );
};

export default Stats;
