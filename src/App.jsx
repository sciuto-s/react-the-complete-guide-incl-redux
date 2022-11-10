import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import { expenses } from "./data";

const App = () => {
  const [expensesList, setExpensesList] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setExpensesList((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <div className="expenses">
        <Expenses expenses={expensesList} />
      </div>
    </>
  );
};

export default App;
