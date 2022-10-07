import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./style/ExpenseItem.css";

const ExpenseItem = ({ date, title, amount, id }) => {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount} </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
