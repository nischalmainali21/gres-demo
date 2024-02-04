"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

interface CategoryDataItem {
  name: string;
  value: number;
}

interface PiechartProps {
  categoryData: CategoryDataItem[];
  subcategory: CategoryDataItem[];
}

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.defaults.font.size = 20;
ChartJS.defaults.font.style = "normal";
ChartJS.defaults.font.weight = "bold";

const Piechart: React.FC<PiechartProps> = ({ categoryData, subcategory }) => {
  // console.log(subcategory);
  const data = {
    labels: categoryData.map((item) =>
      item.name
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(" "),
    ),
    datasets: [
      {
        label: "Number of Products",
        data: categoryData.map((item) => item.value),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 0, 0, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 0, 0, 0.5)",
        ],
        borderWidth: 2,
      },
    ],
  };
  // const subData = {
  //   labels: subcategory.map((item) =>
  //     item.name
  //       .split(" ")
  //       .map((word) => word[0].toUpperCase() + word.substring(1))
  //       .join(" "),
  //   ),
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: subcategory.map((item) => item.value),
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.5)",
  //         "rgba(54, 162, 235, 0.5)",
  //         "rgba(255, 206, 86, 0.5)",
  //         "rgba(75, 192, 192, 0.5)",
  //         "rgba(153, 102, 255, 0.5)",
  //         "rgba(255, 159, 64, 0.5)",
  //         "rgba(255, 99, 132, 0.5)",
  //         "rgba(54, 162, 235, 0.5)",
  //         "rgba(255, 206, 86, 0.5)",
  //         "rgba(75, 192, 192, 0.5)",
  //         "rgba(153, 102, 255, 0.5)",
  //         "rgba(255, 159, 64, 0.5)",
  //         "rgba(255, 0, 0, 0.5)",
  //       ],
  //       borderColor: [
  //         "rgba(255, 99, 132, 1)",
  //         "rgba(54, 162, 235, 1)",
  //         "rgba(255, 206, 86, 1)",
  //         "rgba(75, 192, 192, 1)",
  //         "rgba(153, 102, 255, 1)",
  //         "rgba(255, 159, 64, 1)",
  //         "rgba(255, 99, 132, 0.5)",
  //         "rgba(54, 162, 235, 0.5)",
  //         "rgba(255, 206, 86, 0.5)",
  //         "rgba(75, 192, 192, 0.5)",
  //         "rgba(153, 102, 255, 0.5)",
  //         "rgba(255, 159, 64, 0.5)",
  //         "rgba(255, 0, 0, 0.5)",
  //       ],
  //       borderWidth: 2,
  //     },
  //   ],
  // };
  return (
    <div className="relative mt-8 flex h-[500px] items-center justify-center">
      <Pie
        data={data}
        updateMode="resize"
        redraw
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: "right" } },
        }}
      />
      {/* <Pie
        data={subData}
        updateMode="resize"
        redraw
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: { legend: { position: "right" } },
        }}
      /> */}
    </div>
  );
};

export default Piechart;
