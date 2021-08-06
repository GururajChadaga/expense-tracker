import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import { useState, Fragment } from 'react';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Fragment>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={FilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </Wrapper>
  );
};

export default Expenses;
