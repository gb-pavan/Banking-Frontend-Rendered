import React, { useState } from "react";
import Cookies from 'js-cookie';
import './index.css'
const WithdrawAmount = props => {
  const {selectedCustomer,isAfterLogin} = props
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showcolor, setShowcolor] = useState(false);


 
  

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleWithdraw() {
    const date = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDate = date.toLocaleString('en-US', options);

    const data = {
      'withdrawnTime' : formattedDate,
      'withdrawAmount': amount,
      'accountNumber': selectedCustomer.account_number
    };
    console.log('data',data)

    const webToken = Cookies.get('myToken');

    /*fetch('http://localhost:3005/withdraw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + webToken
      },
      body: JSON.stringify(data),
    })*/


    fetch('https://bank-application-backend2-author.onrender.com/withdraw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + webToken
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {setMessage(data); setShowMessage(true);setShowcolor(true)})
    .catch(error => {setMessage(error) ;setShowMessage(true)})

      /*.then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // do something with the response data
      })
      .catch((error) => {
        console.error('Error:', error);
        // handle the error
      });*/
  }

  const messageClass = showcolor ? "success-message" : "error-message";
  

  return (
    <div className="withdraw-container">   
      
        <div className="background-style">
          <input type="number" placeholder="Enter Amount" value={amount} onChange={handleAmountChange} />
          <button onClick={handleWithdraw}>Submit</button>
        </div>       
      
        {showMessage && <p className={messageClass}> {message} </p>}

    </div>
  );
}

export default WithdrawAmount;
