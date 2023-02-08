import React,{ useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const addExpenseDataHandler = enteredExpense => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        };

        props.onExpenses(expenseData);
        setButtonClicked(false);
        //console.log('NewExpense');
    }
    const addExpenseHandler = () => {
        setButtonClicked(true);
    }
    

    const buttonClickedHandler = () => {
        setButtonClicked(false);
    }

    return (
        <div className='new-expense'>
            {!buttonClicked ? <button onClick={addExpenseHandler}>Add Expense</button>:
            <ExpenseForm onAddExpenseData={addExpenseDataHandler} onCancel={buttonClickedHandler}/>}
        </div>
    );
}

export default NewExpense;