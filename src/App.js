
import './App.css';
import Header  from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import ExpenseChart from './components/ExpenseChart';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <ExpenseChart />
        <TransactionList/>
        <AddTransaction />
      </div>

    </GlobalProvider>
  );
}

export default App;
