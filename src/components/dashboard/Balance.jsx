import { ArrowDownRightIcon, ArrowUpRightIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import UtilCard from "../../utils/UtilCard";
import { TransactionContext } from "../../context/BudgetTransactions";


const Balance = () => {
  const { transactions } = useContext(TransactionContext);

  //since its in an array use map function
  const amount = transactions.map((transaction) => transaction.amount);

  //get the total using reduce method
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  // let res = JSON.parse(localStorage.getItem("balance"));
  // console.log(res?.amount, "resr");
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // localStorage.setItem("income", income);
  // let new_income = localStorage.getItem("income");

  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


  return (
    <section className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mb-10">
      <UtilCard className="flex items-center flex-col justify-center">
        <CurrencyDollarIcon className="w-6 dark:text-gray-50" />
        <h3 className=" font-bold text-lg dark:text-gray-50">Balance</h3>
        <h4 className="text-xl font-medium dark:text-gray-50">${total}</h4>
      </UtilCard>
      <UtilCard className="flex items-center flex-col justify-center">
        <ArrowUpRightIcon className="w-6 dark:text-gray-50" />
        <h3 className="text-color-green-300 font-bold text-lg dark:text-green-200">
          Income
        </h3>
        <h4 className="text-xl font-medium dark:text-gray-50">${income}</h4>
      </UtilCard>
      <UtilCard className="flex items-center flex-col justify-center">
        <ArrowDownRightIcon className="w-6 dark:text-gray-50" />
        <h3 className="text-red-500 font-bold text-lg dark:text-red-200">
          Expense
        </h3>
        <h4 className="text-xl font-medium dark:text-gray-50">${expense}</h4>
      </UtilCard>
    </section>
  );
};

export default Balance;
