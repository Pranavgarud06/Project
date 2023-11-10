import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titleChangeHnadler(event) {
        setEnteredTitle(event.target.value);
    }

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate + 'T00:00:00'),
            
        };
       props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' 
                onChange={titleChangeHnadler}
                value={enteredTitle} />
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' 
                min="0" step="1" 
                onChange={amountChangeHandler} 
                value={enteredAmount} />
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' 
                min="2019-01-01" max="2023-12-31"
                 onChange={dateChangeHandler} 
                 value={enteredDate} />
            </div>

        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.Cancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}


export default ExpenseForm;