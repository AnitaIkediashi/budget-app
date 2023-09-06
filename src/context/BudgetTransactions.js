import React, { createContext, useEffect, useReducer } from "react";
import BudgetReducer from "./BudgetReducer";

//create initial state
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
  
};

//create context
export const TransactionContext = createContext(initialState);

//Provider component
export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BudgetReducer, initialState);

  //actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions))

  }, [state.transactions]);

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
