import React, { useContext, useState } from "react";
import UtilCard from "../../utils/UtilCard";
import { TransactionContext } from "../../context/BudgetTransactions";
import { v4 } from "uuid";

const AddTransactions = ({darkMode}) => {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(TransactionContext);

  const handleSubmit = () => {
    //create a new transaction 
    const newTransaction = {
      id: v4(),
      text,
      amount: +amount //convert a string to a number
    }
    setText('')
    setAmount(0)

    addTransaction(newTransaction)
  }


  return (
    <UtilCard className="py-8 md:w-1/2 w-full">
      <h3 className="font-semibold text-xl dark:text-gray-50">
        Add Transactions
      </h3>
      <form className="flex flex-col gap-8 pt-5">
        <input
          type="text"
          className={`bg-transparent outline-none border-b border-b-color-green-300 dark:border-b-gray-500 font-medium placeholder:text-gray-700 dark:text-gray-50 ${
            darkMode ? "placeholder:text-gray-300" : ""
          }`}
          placeholder="Add Here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          className={`bg-transparent outline-none border-b border-b-color-green-300 dark:border-b-gray-500 font-medium placeholder:text-gray-700 dark:text-gray-50 ${
            darkMode ? "placeholder:text-gray-300" : ""
          }`}
          placeholder="Income/Expense"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </form>
      <button
        className="bg-color-green-300 dark:bg-color-green-50 mt-4 px-7 py-2 rounded-lg text-color-white-100 dark:text-black font-semibold tracking-wider"
        onClick={handleSubmit}
        disabled={text.length === 0 ? true : false}
      >
        Add
      </button>
    </UtilCard>
  );
};

export default AddTransactions;
