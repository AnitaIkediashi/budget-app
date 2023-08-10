import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import UtilCard from "../../utils/UtilCard";
import { TransactionContext } from "../../context/BudgetTransactions";

const Balance = () => {

  const { transactions } = useContext(TransactionContext);

  //since its in an array use map function
  const amount = transactions.map(transaction => transaction.amount)
  
  //get the total using reduce method
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)
  

  return (
    <UtilCard className="flex items-center flex-col justify-center">
      <CurrencyDollarIcon className="w-6 dark:text-gray-50" />
      <h3 className=" font-bold text-lg dark:text-gray-50">Balance</h3>
      <h4 className="text-xl font-medium dark:text-gray-50">${total}</h4>
    </UtilCard>
  );
};

export default Balance;
