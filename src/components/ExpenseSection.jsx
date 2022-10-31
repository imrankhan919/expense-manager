import React from "react";

function ExpenseSection({ transactions }) {
  const income = transactions
    .filter((transaction) => {
      if (transaction.amount > 0) {
        return true;
      }
    })
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);

    const expense = transactions
    .filter((transaction) => {
      if (transaction.amount < 0) {
        return true;
      }
    })
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);

  return (
    <div id="current-status" className="main-section">
      <div id="income" className="balance">
        <span>
          <p>Current Income</p>
          <h1>₹{income}</h1>
        </span>
      </div>

      <div id="expense" className="balance">
        <span>
          <p>Current Expense</p>
          <h1>₹{Math.abs(expense)}</h1>
        </span>
      </div>
    </div>
  );
}

export default ExpenseSection;
