import ExpenseItem from "./ExpenseItem";
import "../components/style/ExpensesList.css";

const ExpensesList = ({ filtredExpenses }) => {
  const expensesContent =
    filtredExpenses.length > 0 ? (
      filtredExpenses.map((expense, i) => (
        <ExpenseItem
          id={i}
          key={i}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    ) : (
      <h2 className="expenses-list__fallback">Found no expenses.</h2>
    );
  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
