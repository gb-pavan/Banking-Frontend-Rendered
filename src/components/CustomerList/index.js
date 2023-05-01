import './index.css';
import React, { useState } from 'react';
import ShowCustomerTransactions from '../ShowCustomerTransactions'

const CustomerList = ({ customers,isAfterLogin }) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleUserClick = (customer) => {
    setSelectedCustomer(customer);
    console.log('selectedCustomer',selectedCustomer)
    setShowDetails(true)
  };

  const handleBankerClick = () => {
    setShowDetails(false)
  };

  return (
    <div>
      

      {!showDetails && (
        <table className='all-customers-container' style={{ borderSpacing: '40px' }}>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Account Number</th>
            <th>Account Balance</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((user, index) => (
            <tr key={index} className='user-row' onClick={() => handleUserClick(user.account_number)}>
              <td>{user.username}</td>
              <td>{user.account_number}</td>
              <td>{user.Account_balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}

      {showDetails && (

        <ShowCustomerTransactions selectedCustomer={selectedCustomer} handleBankerClick={handleBankerClick} isAfterLogin={isAfterLogin} />
        
        
      )}
    </div>
  );
};

export default CustomerList;
