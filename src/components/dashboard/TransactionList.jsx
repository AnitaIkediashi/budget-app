import React, { useContext } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { TransactionContext } from "../../context/BudgetTransactions";

const TransactionList = ({transaction}) => {

  const sign = transaction.amount < 0 ? "-" : "+"
  const { deleteTransaction } = useContext(TransactionContext);

  return (
    <li className="mb-3 flex items-center justify-between py-2">
      <h4 className="font-semibold text-lg capitalize">{transaction.text}</h4>
      <div className="flex items-center gap-4">
        <p
          className={`font-medium ${
            transaction.amount < 0 ? "text-red-600" : "text-green-600 "
          }`}
        >
          {sign}${Math.abs(transaction.amount)}
        </p>
        <button className="text-white bg-color-green-200 p-1 rounded-md" onClick={() => deleteTransaction(transaction.id)}>
          <TrashIcon className="w-6" />
        </button>
      </div>
    </li>
  );
};

export default TransactionList;
