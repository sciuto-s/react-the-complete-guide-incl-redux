import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./style/Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <Card>
      {expenses &&
        expenses.map((expense, i) => (
          <ExpenseItem
            id={i}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
