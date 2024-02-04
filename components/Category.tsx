import React from "react";

type PropsType = {
  categories: string[];
  onSelectCategory: (newCat: string) => void;
};

const Category = ({ categories, onSelectCategory }: PropsType) => {
  console.log(categories.length);
  return (
    <div className="p-2">
      <select
        id="categoryDropdown"
        onChange={(e) => onSelectCategory(e.target.value)}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-myColor-500 focus:ring-myColor-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-myColor-500 dark:focus:ring-myColor-500"
      >
        <option value="" className="hover:bg-gray-500">
          All Categories
        </option>

        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default Category;
