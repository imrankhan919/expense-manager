import { useState } from "react";
import ExpenseSection from "./components/ExpenseSection";
import ListGroup from "./components/ListGroup";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import About from "./Pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [transactions, setTransactions] = useState([]);

  // Save Transaction

  const saveTransaction = (text, amount) => {
    const newTransaction = {
      id: uuidv4(),
      text: text,
      amount: parseInt(amount),
    };

    setTransactions([...transactions, newTransaction]);
  };

  // Delete Transaction

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <MainSection
                  transactions={transactions}
                  saveTransaction={saveTransaction}
                />
                <ExpenseSection transactions={transactions} />
                <ListGroup
                  transactions={transactions}
                  deleteTransaction={deleteTransaction}
                />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
