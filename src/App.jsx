import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import { expenses } from "./data";

function App() {
  return (
    <>
      <NewExpenses />
      <div className="expenses">
        <Expenses expenses={expenses} />
      </div>
    </>
  );
}

export default App;
