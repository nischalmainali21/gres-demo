import { ProductsDataType } from "@/types";
import React from "react";
import { obtain } from "../action";
import Piechart from "@/components/Piechart";

interface CategoryCount {
  [category: string]: number;
}

interface CategoryDataItem {
  name: string;
  value: number;
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

const aggregateCategories = (data: CategoryDataItem[]) => {
  const aggregatedData = data.reduce((acc, curr) => {
    const categoryName = getCategoryHigherLevel(curr.name); // Implement this function
    acc[categoryName] = (acc[categoryName] || 0) + curr.value;
    return acc;
  }, {} as CategoryCount);

  // Convert the aggregated data back to an array
  const result = Object.entries(aggregatedData).map(([name, value]) => ({
    name,
    value,
  }));
  return result;
};

const getCategoryHigherLevel = (subcategory: string) => {
  if (subcategory.startsWith("mens")) {
    return "Mens";
  } else if (subcategory.startsWith("womens")) {
    return "Womens";
  } else if (subcategory === "smartphones" || subcategory === "laptops") {
    return "Electronics";
  } else if (
    subcategory === "skincare" ||
    subcategory === "fragrances" ||
    subcategory === "sunglasses"
  ) {
    return "Beauty";
  } else if (subcategory === "automotive" || subcategory === "motorcycle") {
    return "Vehicle";
  } else if (
    subcategory === "furniture" ||
    subcategory === "home-decoration" ||
    subcategory === "lighting"
  ) {
    return "Home";
  } else {
    return subcategory;
  }
};

const Stats = async () => {
  const categoryData = await getCategoryData();
  const subcategory = aggregateCategories(categoryData);
  // console.log(subcategory);

  // console.log(categoryData);
  return (
    <div>
      <Piechart categoryData={categoryData} subcategory={subcategory} />
    </div>
  );
};

export default Stats;
