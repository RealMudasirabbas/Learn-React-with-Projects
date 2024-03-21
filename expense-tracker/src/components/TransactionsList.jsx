import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const TransactionsList = () => {
    const { Transactions, deleteTransaction } = useContext(ExpenseContext);

    const handleDelete = (id) => {
        deleteTransaction(id);
    };

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {Transactions.map((transaction) => (
                    <li key={transaction.id} className={transaction.amount >= 0? 'plus' :'minus'}>
                        <h4>{transaction.text}</h4>
                        <p
                            className={
                                transaction.amount >= 0
                                    ? 'money plus'
                                    : 'money minus'
                            }
                        >
                            ${transaction.amount}
                        </p>
                        <button onClick={() => handleDelete(transaction.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TransactionsList;
