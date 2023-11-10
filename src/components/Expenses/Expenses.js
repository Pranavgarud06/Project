import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

 function filterChangeHandler  (selectedYear) {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
  }



export default Expenses;