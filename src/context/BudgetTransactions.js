import React, { createContext, useReducer } from "react";
import BudgetReducer from './BudgetReducer'

//create initial state
const initialState = {
  transactions: [],
};

//create context
export const TransactionContext = createContext(initialState)

//Provider component 
export const TransactionProvider = ({children}) => {
  const [state, dispatch] = useReducer(BudgetReducer, initialState)

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

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
