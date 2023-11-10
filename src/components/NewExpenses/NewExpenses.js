import './NewExpense.css'

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
function NewExpense (props){
   const [Changing , isChanging] =useState(false);

   function saveExpenseDataHandler (enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
       props.onAddExpense(expenseData);
       isChanging(false);
    };

        function clickHandler() {
            isChanging(true);
        };

        function cancel () {
            isChanging(false);
        }


    return <div className='new-expense'>
        {!Changing && <button onClick={clickHandler}>Add New Expense</button>}
           { Changing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} Cancel={cancel}/>}
    </div>
}


export default NewExpense;