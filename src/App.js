import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";

const Initial_items = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount:100,
    date: new Date(2020, 9, 14),
  },
  { 
    id: 'e2',
   title: 'New TV',
    amount: 50000, 
    date: new Date(2022, 1, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 2000,
    date: new Date(2019, 4, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 6, 12),
  },
];

function App() {
  const[expenses, setExpenses] = useState(Initial_items);

  function addExpenseHandler (expense) {
    setExpenses (prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return <div>
   <NewExpense  onAddExpense={addExpenseHandler}/>
  <Expenses item={expenses} />
  
  </div>

}
export default App;
