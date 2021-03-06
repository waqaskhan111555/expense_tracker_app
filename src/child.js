import React, { useContext, useState } from "react";
import { TransactionContext } from "./transactionContext";

function Child() {
  let { transactions, addTransaction } = useContext(TransactionContext);

  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const handleAddition = (event) => {
    event.preventDefault();
    if (Number(newAmount) === 0) {
      alert("Please enter correct value");
      return false;
    }
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });

    setDesc("");
    setAmount(0);
  };

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transaction.length; i++) {
      if (transaction[i].amount > 0) income = income + transaction[i].amount;
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transaction.length; i++) {
      if (transaction[i].amount < 0) expense += transaction[i].amount;
    }
    return expense;
  };

  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>
      <h3>
        Your Balance <br />
        ${getIncome()+getExpense()}
      </h3>

      <div className="expense-container">
        <h3>
          Income <br />
        $<span id="par1">
           {getIncome()}
             </span>
        </h3>
        <h3>
          Expense <br />$
            <span id="par2">{getExpense()}
            </span>
        </h3>
      </div>
      <h3>History</h3>

      <ul className="transaction-list">
        {transaction.map((transObj, ind) => {
          return (
            <li key={ind}>
              <span>{transObj.desc}</span>
              <span>${transObj.amount}</span>
            </li>
          );
        })}
      </ul>
      <h3>Add Transaction</h3>
      <form className="transaction-form" onSubmit={handleAddition}>
        <label>
          Enter Description <br />
          <input
            type="text"
            value={newDesc}
            placeholder="Description"
            onChange={(ev) => setDesc(ev.target.value)}
            required
          />
          <br />
        </label>
        <label>
          EnterAmount
          <br />
          <input
            type="number"
            value={newDesc}
            placeholder="Description"
            onChange={(ev) => setDesc(ev.target.value)}
            required
          />
        </label>
        <br />
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
}

export default Child;
