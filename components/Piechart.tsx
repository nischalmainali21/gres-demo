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
}

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.defaults.font.size = 20;
ChartJS.defaults.font.style = "normal";
ChartJS.defaults.font.weight = "bold";

const Piechart: React.FC<PiechartProps> = ({ categoryData }) => {
  //   console.log(categoryData);
  const data = {
    labels: categoryData.map((item) => item.name),
    datasets: [
      {
        label: "# of Votes",
        data: categoryData.map((item) => item.value),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 0, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 0, 0, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="relative flex h-[60vh] w-[55vw] items-center justify-center">
      <Pie
        data={data}
        updateMode="resize"
        redraw
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    </div>
  );
};

export default Piechart;
