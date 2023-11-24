import React from "react";

const CustomerInfo = ({ item }) => {
  console.log(item.backgroundColor);
  return (
    <div
      className={`border border-solid border-gray-400 rounded-lg w-full p-6 flex flex-col bg-[${item.backgroundColor}]`}
    >
      <p>{item.title}</p>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">{item.amount}K</h3>
        <div className="flex gap-1">
          <p className="text-xs">{item.percentage}%</p>
          <img src="./assets/arrow.svg" alt="arrow" className="w-4" />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
