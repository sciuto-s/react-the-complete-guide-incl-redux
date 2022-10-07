import Expenses from "./components/Expenses";
import { expenses } from "./data";

function App() {
  return (
    <>
      <div className="expenses">
        <Expenses expenses={expenses} />
      </div>
    </>
  );
}

export default App;
