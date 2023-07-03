import React from "react";
import UtilCard from "../../utils/UtilCard";

const AddIncome = () => {
  return <UtilCard className="py-8">
    <h3 className="font-semibold text-xl">Add Income</h3>
    <div className="flex flex-col gap-8 pt-5">
      <input type="text" className="bg-transparent outline-none border-b border-b-color-green-300 font-medium placeholder:text-gray-700" placeholder="Your Income" />
      <input type="number" className="bg-transparent outline-none border-b border-b-color-green-300 font-medium placeholder:text-gray-700" placeholder="Value" />
    </div>
    <button className="bg-color-green-300 mt-4 px-7 py-2 rounded-lg text-color-white-100 font-semibold tracking-wider">Add</button>
  </UtilCard>;
};

export default AddIncome;
