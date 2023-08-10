import React, { useContext } from "react";
import UtilCard from "../../utils/UtilCard";
import {
  ArrowUpRightIcon,
  ArrowDownRightIcon,
} from "@heroicons/react/24/outline";
import { TransactionContext } from "../../context/BudgetTransactions";

const IncomeExpense = () => {
  const { transactions } = useContext(TransactionContext);

  const amount = transactions.map((transaction) => transaction.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    (amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
      <UtilCard className="flex items-center flex-col justify-center">
        <ArrowUpRightIcon className="w-6 dark:text-gray-50" />
        <h3 className="text-color-green-300 font-bold text-lg dark:text-green-200">Income</h3>
        <h4 className="text-xl font-medium dark:text-gray-50">${income}</h4>
      </UtilCard>
      <UtilCard className="flex items-center flex-col justify-center">
        <ArrowDownRightIcon className="w-6 dark:text-gray-50" />
        <h3 className="text-red-500 font-bold text-lg dark:text-red-200">Expense</h3>
        <h4 className="text-xl font-medium dark:text-gray-50">${expense}</h4>
      </UtilCard>
    </div>
  );
};

export default IncomeExpense;
