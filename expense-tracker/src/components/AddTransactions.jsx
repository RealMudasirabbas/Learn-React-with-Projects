import React from 'react';
import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
const AddTransactions = () => {
    const { text, setText, amount, setAmount, addTransaction } =
        useContext(ExpenseContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount, // Convert amount to number
        };
        addTransaction(newTransaction);
        setText('');
        setAmount('');
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn" onClick={handleSubmit}>
                    Add transaction
                </button>
            </form>
        </>
    );
};

export default AddTransactions;
