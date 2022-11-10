import { useState } from "react";
import "../style/ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onStartEditing }) => {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredAmount, setEntredAmount] = useState("");
  const [entredDate, setEntredDate] = useState("");
  //Posso utilizzare un solo state utilizzando un object
  /* const [userIput, setUserInput] = useState({
    entredTitle: "",
    entredAmount: "",
    entredDate: "",
  }); */
  const titleChangeHanler = (e) => {
    // console.log(e.target.value);
    // voglio salvare questo valore -> uso uno state
    setEntredTitle(e.target.value);
    /*   setUserInput({
      ...userIput,
      entredTitle: e.target.value,
    }); */
  };
  const amountChangeHandler = (e) => {
    setEntredAmount(e.target.value);
    /* setUserInput({
      ...userIput,
      entredAmount: e.target.value,
    }); */

    // BISOGNA USARE QUESTA SINTASSI OGNI VOLTA CHE L'AGGIORNAMENTO DI STATO DIPENDE DALLO STATO PRECENDENTE //
    /////////////////
    /*  setUserInput((prevState) => {
      return { ...prevState, entredAmount: e.targe.value };
    }); */
    ////////////////
  };
  const dateChangeHandler = (e) => {
    setEntredDate(e.target.value);

    /*  setUserInput({
      ...userIput,
      entredDate: e.target.value,
    }); */
  };
  const submitHandler = (e) => {
    e.preventDefault(); // per bloccare il ricaricamento della pagina ad ogni submit

    const expenseData = {
      title: entredTitle,
      amount: +entredAmount,
      date: new Date(entredDate),
    };
    console.log({ expenseData });
    onSaveExpenseData(expenseData);
    setEntredTitle("");
    setEntredAmount("");
    setEntredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entredTitle} onChange={titleChangeHanler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onStartEditing}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
