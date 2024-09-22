import React, { useState, useEffect } from 'react';

const LeverageCalculator = ({ radixDappToolkit }) => {
  const [balance, setBalance] = useState(0);
  const [cost, setCost] = useState('');
  const [leverage, setLeverage] = useState(2);
  const [totalCost, setTotalCost] = useState(0);
  const [depositAmount, setDepositAmount] = useState('');

  const componentAddress = "component_sim1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzqu57yag";

  useEffect(() => {
    fetchBalance();
  }, []);


  const fetchBalance = async () => {
    try {
      const result = await radixDappToolkit.sendTransaction({
        transactionManifest: `
          CALL_METHOD
            ComponentAddress("${componentAddress}")
            "get_balance";
        `,
        version: 1,
      });
      setBalance(result.outputs[0]);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  const handleCalculate = async () => {
    try {
      const result = await radixDappToolkit.sendTransaction({
        transactionManifest: `
          CALL_METHOD
            ComponentAddress("${componentAddress}")
            "calculate_total_cost"
            Decimal("${cost}")
            ${leverage};
        `,
        version: 1,
      });
      setTotalCost(result.outputs[0]);
    } catch (error) {
      console.error('Error calculating total cost:', error);
    }
  };

  const handleDeposit = async () => {
    try {
      await radixDappToolkit.sendTransaction({
        transactionManifest: `
          CALL_METHOD
            ComponentAddress("${componentAddress}")
            "deposit"
            Bucket("${depositAmount}");
        `,
        version: 1,
      });
      fetchBalance();
    } catch (error) {
      console.error('Error depositing funds:', error);
    }
  };

  return (
    <div className="leverage-calculator">
      <h2>Leverage Calculator</h2>
      <p>Wallet Balance: {balance} XRD</p>
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Enter cost"
      />
      <select
        value={leverage}
        onChange={(e) => setLeverage(Number(e.target.value))}
      >
        <option value={2}>2x Leverage</option>
        <option value={10}>10x Leverage</option>
      </select>
      <button onClick={handleCalculate}>
        Calculate Total Cost
      </button>
      {totalCost > 0 && (
        <p>Total Cost with Leverage: {totalCost} XRD</p>
      )}
      <div>
        <input
          type="number"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
          placeholder="Enter deposit amount"
        />
        <button onClick={handleDeposit}>
          Deposit
        </button>
      </div>
    </div>
  );
};

export default LeverageCalculator;