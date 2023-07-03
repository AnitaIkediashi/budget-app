import React from "react";
import UtilCard from "../../utils/UtilCard";
import {
  ArrowUpRightIcon,
  ArrowDownRightIcon,
} from "@heroicons/react/24/outline";

const IncomeExpense = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
      <UtilCard className="flex items-center flex-col justify-center">
        <ArrowUpRightIcon className="w-6" />
        <h3 className="text-color-green-300 font-bold text-lg">Income</h3>
        <h4 className="text-xl font-medium">+0.00</h4>
      </UtilCard>
      <UtilCard className="flex items-center flex-col justify-center">
        <ArrowDownRightIcon className="w-6" />
        <h3 className="text-red-500 font-bold text-lg">Expense</h3>
        <h4 className="text-xl font-medium">-0.00</h4>
      </UtilCard>
    </div>
  );
};

export default IncomeExpense;
