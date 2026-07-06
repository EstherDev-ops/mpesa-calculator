import { useState } from "react";
import { calculateFee, type TransactionType } from "../utils/calculatorFee";

function isTransactionType(value: string): value is TransactionType {
  return value === "send" || value === "withdraw" || value === "atm";
}

function CalculatorFee() {
  const [amount, setAmount] = useState<number>(0);
  const [transactionType, setTransactionType] =
    useState<TransactionType>("send");

  const feeResult = amount > 0  ? calculateFee(amount, transactionType): null;

  return (
    <div>
      <h2>MPesa Calculator</h2>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Transaction Type:
        <select
          value={transactionType}
          onChange={(e) => {
            const value = e.target.value;
            if (isTransactionType(value)) {
              setTransactionType(value);
            }
          }}
        >
          <option value="send">Send Money</option>
          <option value="withdraw">Withdraw Cash</option>
          <option value="atm">ATM Withdrawal</option>
        </select>
      </label>

    {feeResult !== null && <p>Estimated fee: {feeResult}</p>}
    </div>
  );
}

export default CalculatorFee;
