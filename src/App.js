import LoginForm from './components/LoginForm';
import './App.css';
import { useState } from 'react';
import BankerDashBoard from './components/BankerDashBoard';
import CustomerDashBoard from './components/CustomerDashBoard';

function App() {
  const [showBanker,setShowBanker] = useState(false)
  const [showLogin,setShowLogin] = useState(true)
  const [bankerData,setBankerData] = useState([])
  const [selectedCustomer,setSelectedCustomer] = useState([])

  console.log('selectedCustomer in app.js',selectedCustomer)

  return (
    <div className="App">      
      {showLogin ? <LoginForm setShowBanker={setShowBanker} setShowLogin={setShowLogin} setBankerData={setBankerData} setSelectedCustomer={setSelectedCustomer} /> : (showBanker ? <CustomerDashBoard selectedCustomer={selectedCustomer} showLogin={showLogin} /> : <BankerDashBoard bankerData={bankerData} showLogin={showLogin} />)}
    </div>
  );
}

export default App;
