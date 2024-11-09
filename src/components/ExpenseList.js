import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('/api/expenses');
        setExpenses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense._id}>
          {expense.title} - ${expense.amount} - {expense.category}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
