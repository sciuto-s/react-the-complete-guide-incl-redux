/* import { useState } from "react";
 */ import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./style/ExpenseItem.css";

const ExpenseItem = ({ date, title, amount, id }) => {
  /* const [newTitle, setNewTitle] = useState(title); */
  /*  const clickHandler = () => {
    //setTimeout(() => {
    setNewTitle(`NEW ${title}`);
    //}, 1000);
  }; */

  return (
    <li>
      <Card className="expense-item">
        <div>
          <ExpenseDate date={date} />
        </div>
        <div className="expense-item__description">
          {/*  <h2>{newTitle}</h2> */}
          <h2>{title}</h2>
          <div className="expense-item__price">${amount} </div>
        </div>
        {/*  <button onClick={() => clickHandler()}>Change Title</button> */}
      </Card>
    </li>
  );
};
export default ExpenseItem;
