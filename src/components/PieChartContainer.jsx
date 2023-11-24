import React from "react";
import PieChart from "./PieChart";

const PieChartContainer = ({ title, data }) => {
  return (
    <div className="w-full h-full bg-[#EBEBEB] rounded-3xl flex flex-col p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <PieChart data={data} />
    </div>
  );
};

export default PieChartContainer;
