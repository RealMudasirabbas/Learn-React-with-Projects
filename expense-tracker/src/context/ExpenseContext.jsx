import React, { createContext } from 'react';

export const ExpenseContext = createContext();

const initialState = {
    Transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 },
    ],
};
export const ExpenseProvider = ({ children }) => {
    const [text, setText] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [Transactions, setTransactions] = React.useState(
        initialState.Transactions,
    );
    const addTransaction = (newTransaction) => {
        setTransactions([...Transactions, newTransaction]);
    };
    const deleteTransaction = (id) => {
        setTransactions(Transactions.filter((transaction) => transaction.id!== id));
    };
    
    return (
        <ExpenseContext.Provider
            value={{
                text,
                setText,
                amount,
                setAmount,
                Transactions,
                setTransactions,
                addTransaction,
                deleteTransaction,
                Transactions,
                
            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};
