import React from "react";
import PieChart from "./PieChart";

const PieChartContainer = ({ title, data, scheme }) => {
  return (
    <div className="w-full h-full bg-[#EBEBEB] rounded-3xl flex flex-col p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <PieChart data={data} scheme={scheme} />
    </div>
  );
};

export default PieChartContainer;
