import {useState} from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';

function App() {
  const [accounts, setAccounts] = useState([])
  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts}></NavBar>
      <MainMint accounts={accounts} setAccounts={setAccounts}></MainMint>
    </div>
  );
}

export default App;
