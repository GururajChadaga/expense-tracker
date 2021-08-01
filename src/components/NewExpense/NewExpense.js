import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpense) => {
    const expense = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expense);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
