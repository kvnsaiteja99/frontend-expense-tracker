import React, { useState } from 'react';
import axios from 'axios';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExpense = { title, amount, category };
    try {
      const response = await axios.post('/api/expenses', newExpense);
      onAddExpense(response.data);
      setTitle('');
      setAmount('');
      setCategory('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Expense Title"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
