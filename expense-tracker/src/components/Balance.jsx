import React, {useContext} from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const Balance = () => {
    const {Transactions} = useContext(ExpenseContext);
    
    const income = Transactions.filter((transaction) => transaction.amount > 0);
    const total =  income.reduce((acc, item) => (acc + item.amount), 0);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    );
};

export default Balance;
