import { useState } from "react";

import Card from "./Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./style/Expenses.css";

const Expenses = ({ expenses }) => {
  const [filtredYear, setFiltredYear] = useState("2020");

  const onChangeYearFilterHandler = (selectedYear) => {
    console.log(selectedYear);
    setFiltredYear(selectedYear);
  };
  console.log(filtredYear);
  const filtredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filtredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeYearFilterHandler={onChangeYearFilterHandler}
          selected={filtredYear}
        />
        <ExpensesChart expenses={filtredExpenses} />
        <ExpensesList filtredExpenses={filtredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
