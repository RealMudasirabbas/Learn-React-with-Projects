import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransactions from './components/AddTransactions';
import TransactionsList from './components/TransactionsList';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionsList />
                <AddTransactions />
            </div>
        </div>
    );
}

export default App;
