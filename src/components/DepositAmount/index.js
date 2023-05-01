import React, { useState } from 'react';
import './index.css'
import Cookies from 'js-cookie';

const DepositAmount = props => {
  const {jwtToken,selectedCustomer} = props
  const [toAccountNum, setToAccountNum] = useState('')
  const [depositAmount, setdepositAmount] = useState('')
  const [toAccountHolder, setToAccountHolder] = useState('')
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
    }
    console.log('depositData now checking',depositData)

    const webToken = Cookies.get('myToken');

      fetch('https://bank-application-backend2-author.onrender.com/deposit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + webToken
      },
      body: JSON.stringify(depositData),
    }).then(response => response.text())
    .then(data => {setDepositMessage(JSON.parse(data)); setShowDepositMessage(true)})
    .catch(error => {setDepositMessage(JSON.parse(error)); setShowDepositMessage(true)})
  };

  return (
    <div>
      <div className='deposit-container'>
        <table className='table-container'>
          <thead>
            <tr>
              <th className='column-spacing'>Deposit_To</th>
              <th className='column-spacing'>To_Account_Number</th>
              <th className='column-spacing'>Deposit_Amount</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                <td>
                  <select name="depositTo" required value={toAccountHolder} onChange={(e) => setToAccountHolder(e.target.value)}>
                    <option value="" selected></option>
                    <option value="Ashok">Ashok</option>
                    <option value="Devaraj">Devaraj</option>
                    <option value="Rajashekar">Rajashekar</option>
                    <option value="Pavan">Pavan</option>
                    <option value="Subramanyam">Subramanyam</option>
                  </select>
                </td>
                <td>
                  <input type="text" required name="toAccountNumber" value={toAccountNum} onChange={(e) => setToAccountNum(e.target.value)} />
                </td>
                <td>
                  <input type="text" required name="depositAmount" value={depositAmount} onChange={(e) => setdepositAmount(e.target.value)} />
                </td>
                
              </tr>
            
          </tbody>
        </table>
        <button onClick={handleDeposit} className='button-spacing'>Deposit</button>        
      </div>
      <div>
        {showDepositMessage && <p className='set-coloring'>{depositMessage}</p>}
      </div>
    </div>
    
  );
};

export default DepositAmount;
