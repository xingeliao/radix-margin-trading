import React, { useState } from 'react';

const AccountInfo = () => {
  const [balance, setBalance] = useState(10000);
  const [marginUsed, setMarginUsed] = useState(0);
  const [amount, setAmount] = useState('');

  const updateBalance = () => {
    const newAmount = parseFloat(amount);
    if (!isNaN(newAmount)) {
      setBalance(prevBalance => prevBalance + newAmount);
      setAmount('');
    }
  };

  const updateMargin = () => {
    const newAmount = parseFloat(amount);
    if (!isNaN(newAmount)) {
      setMarginUsed(prevMargin => prevMargin + newAmount);
      setAmount('');
    }
  };

  return (
    <div>
      <h1>Account Information</h1>
      <div>
        <h2>Account Details</h2>
        <p>Balance: ${balance.toFixed(2)}</p>
        <p>Margin Used: ${marginUsed.toFixed(2)}</p>
      </div>
      <div>
        <h2>Update Account</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button onClick={updateBalance}>Update Balance</button>
        <button onClick={updateMargin}>Update Margin</button>
      </div>
    </div>
  );
};

export default AccountInfo;