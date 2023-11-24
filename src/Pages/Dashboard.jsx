import React from "react";
import Sidebar from "../components/Sidebar";
import Linechart from "../components/Linechart";

const Dashboard = () => {
  return (
    <div className="flex flex-row dash">
      <div className="w-50">
        <Sidebar />
      </div>

      <div className="w-full">
        {/* <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsum,
          quo eos repellat quod error molestiae porro minima doloremque incidunt
          sequi vel nemo est sapiente facilis! Velit rem aut qui.
        </p> */}
        <Linechart />
      </div>
    </div>
  );
};

export default Dashboard;
