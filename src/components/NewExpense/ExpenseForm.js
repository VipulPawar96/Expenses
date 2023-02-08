import React,{ useState }  from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    }

    const enteredExpenseHandler = (event) =>{
        event.preventDefault();
        const enteredData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
        props.onAddExpenseData(enteredData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return (
        <form onSubmit={enteredExpenseHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Enter Title</label>
                    <input value={enteredTitle} type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>$Enter Amount</label>
                    <input value={enteredAmount} type='text' onChange={amountChangeHandler} min='0.01' step='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Enter Date</label>
                    <input value={enteredDate} type='date' onChange={dateChangeHandler} min='2018-01-01' max='2020-12-30' />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button'onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add</button>
            </div>
        </form>
    );
}

export default ExpenseForm;