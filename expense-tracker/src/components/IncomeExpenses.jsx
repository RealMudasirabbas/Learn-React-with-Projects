import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const IncomeExpenses = () => {
    const { Transactions } = useContext(ExpenseContext);
    const income = Transactions.filter((transaction) => transaction.amount > 0);
    const expense = Transactions.filter(
        (transaction) => transaction.amount < 0,
    );

    const totalIncome = income.reduce(
        (acc, transaction) => acc + transaction.amount,
        0,
    );
    const totalExpense = expense.reduce(
        (acc, transaction) => acc + transaction.amount,
        0,
    );

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${totalIncome}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${totalExpense}</p>
            </div>
        </div>
    );
};

export default IncomeExpenses;
