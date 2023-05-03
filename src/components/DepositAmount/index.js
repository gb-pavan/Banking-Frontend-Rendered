import React, { useState } from 'react';
import './index.css'
import Cookies from 'js-cookie';

const DepositAmount = props => {
  const { jwtToken, selectedCustomer } = props;
  const [toAccountNum, setToAccountNum] = useState('');
  const [depositAmount, setdepositAmount] = useState('');
  const [toAccountHolder, setToAccountHolder] = useState('');
  const [depositMessage, setDepositMessage] = useState('');
  const [showDepositMessage, setShowDepositMessage] = useState(false);

  const handleDeposit = () => {
    const date = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const depositTime = date.toLocaleString('en-US', options);
    const fromAccountNum = selectedCustomer.account_number
    const depositData = {
      'depositTime':depositTime,
      'fromAccountNum':fromAccountNum,
      'toAccountNum':toAccountNum,
      'depositAmount':depositAmount
    };
    console.log('depositData now checking',depositData);

    const webToken = Cookies.get('myToken');

    fetch('https://banking-application-backend-render.onrender.com/deposit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + webToken
      },
      body: JSON.stringify(depositData),
    })
    .then(response => response.text())
    .then(data => {
      setDepositMessage(JSON.parse(data));
      setShowDepositMessage(true);
    })
    .catch(error => {
      setDepositMessage(JSON.parse(error));
      setShowDepositMessage(true);
    });
  };

  return (
    <div className="deposit-container">
      <div className='deposit-amount-container'>
        <div className="form-row">
          <label htmlFor="toAccountHolder" className="form-label">Deposit To:</label>
          <select id="toAccountHolder" name="toAccountHolder" required value={toAccountHolder} onChange={(e) => setToAccountHolder(e.target.value)}>
            <option value="Select" selected></option>
            <option value="Ashok">Ashok</option>
            <option value="Devaraj">Devaraj</option>
            <option value="Rajashekar">Rajashekar</option>
            <option value="Pavan">Pavan</option>
            <option value="Subramanyam">Subramanyam</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="toAccountNum" className="form-label">To Account Number:</label>
          <input type="text" id="toAccountNum" name="toAccountNum" required value={toAccountNum} onChange={(e) => setToAccountNum(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="depositAmount" className="form-label">Deposit Amount:</label>
          <input type="text" id="depositAmount" name="depositAmount" required value={depositAmount} onChange={(e) => setdepositAmount(e.target.value)} />
        </div>
      </div>
      
      <div className='deposit-button'>
        <button onClick={handleDeposit} className="button-spacing">Deposit</button>
        {showDepositMessage && <p className="set-coloring">{depositMessage}</p>}
      </div>
      
    </div>
  );
};

export default DepositAmount;
