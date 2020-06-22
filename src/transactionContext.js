import React, { createContext, useReducer } from "react";
import transReducer from "./transactionReducer";
let intitalTransaction = [
  { amount: 100, desc: "cash" },
  { amount: -40, desc: "book" },
  { amount: 70, desc: "camera" },
];
export const TransactionContext = createContext(intitalTransaction);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(transReducer, intitalTransaction);

  function addTransaction(Transobj) {
    dispatch({
      type: "ADD",
      payload: {
        amount: Transobj.amount,
        desc: Transobj.desc,
      },
    });
  }
  return (
    <TransactionContext.Provider
      value={{ transactions: state, addTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
