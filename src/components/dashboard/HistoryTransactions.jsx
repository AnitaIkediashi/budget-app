import React, { useContext } from "react";
import UtilCard from "../../utils/UtilCard";
import { TransactionContext } from "../../context/BudgetTransactions";
import TransactionList from "./TransactionList";

const HistoryTransactions = () => {

  const { transactions } = useContext(TransactionContext)
  
  return (
    <UtilCard>
      <ul>
        {transactions.map((transaction) => (
          <TransactionList transaction={transaction} key={transaction.id} />
        ))}
        
      </ul>
    </UtilCard>
  );
};

export default HistoryTransactions;
