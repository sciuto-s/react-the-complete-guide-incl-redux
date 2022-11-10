import { useState } from "react";
import "../style/NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState();
  const saveExpenseDataHandler = (entredExpenseData) => {
    const expenseData = {
      ...entredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    console.log(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  const addEditingExpense = !isEditing ? (
    <button onClick={startEditingHandler}>Add new Expense</button>
  ) : (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onStartEditing={startEditingHandler}
    />
  );

  return <div className="new-expense">{addEditingExpense}</div>;
};

export default NewExpenses;
