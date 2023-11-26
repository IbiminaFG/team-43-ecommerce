import React from "react";
import Sidebar from "../components/Sidebar";
import Linechart from "../components/Linechart";
import CustomerInfo from "../components/CustomerInfo";
import PieChartContainer from "../components/PieChartContainer";
import { customerArr, productSummary, location } from "../data";

const Dashboard = () => {
  return (
    <div className="flex flex-row dash">
      <div className="w-50">
        <Sidebar />
      </div>

      <div className="w-full h-screen overflow-y-scroll">
        {/* <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsum,
          quo eos repellat quod error molestiae porro minima doloremque incidunt
          sequi vel nemo est sapiente facilis! Velit rem aut qui.
        </p> */}
        <div className="w-full p-6">
          <p className="text-2xl font-medium">
            Hello Chowdeck, here are your insights for this week.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 p-5">
          {customerArr.map((item, index) => (
            <CustomerInfo key={index} item={item} />
          ))}
        </div>
        <div className="w-full h-[600px] md:h-80 flex flex-col md:flex-row gap-6 px-5">
          <PieChartContainer
            title="Product Summary"
            data={productSummary}
            scheme="purples"
          />
          <PieChartContainer title="Location" data={location} scheme="reds" />
        </div>
        <Linechart />
      </div>
    </div>
  );
};

export default Dashboard;
