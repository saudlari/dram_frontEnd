import Button from "./buttons/Button";
import React, { useState } from "react";
import { useERC20Balance } from "../hooks/useERC20Balance";
// Puedes mapear los tokens aquí para fácil acceso
const TOKENS = {
  usdt: {
    address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118", // USDT en Avalanche
    label: "USDT",
  },
  usdc: {
    address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", // USDC en Avalanche
    label: "USDC",
  },
  dai: {
    address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", // DAI en Avalanche
    label: "DAI",
  },
};

export default function CardBond() {
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("usdt");
  const [account, setAccount] = useState("");
  const [price] = useState("100 USDT");

  // Hook para balance
  const { balance } = useERC20Balance(TOKENS[token].address, account);

  // Conectar wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } else {
      alert("MetaMask no está instalado");
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body">
          <h2 className="card-title text-center">DRAMTOKEN</h2>
          <p className="text-center text-left"> $0.10</p>
          <div className="card-actions justify-center gap-6 ">
            <Button variant="primary">Buy Now</Button>
            <Button variant="secondary">Sell</Button>
          </div>
          <form className="mt-4">
            <button
              type="button"
              className="btn btn-primary w-full mb-2"
              onClick={connectWallet}
              disabled={!!account}
            >
              {account ? "Wallet conectada" : "Conectar MetaMask"}
            </button>
            {account && (
              <div className="mb-2 text-xs break-all">Cuenta: {account}</div>
            )}

            <label className="label mt-4">Price</label>
            <input
              type="text"
              className="input"
              value={price}
              readOnly
            />

            <label className="label mt-4">Balance</label>
            <input
              type="text"
              className="input"
              value={balance}
              readOnly
            />

            <label className="label mt-4">Amount</label>
            <input
              type="number"
              className="input"
              placeholder="Cantidad a comprar"
              min="0"
              step="any"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />

            <label className="label mt-4">Token to buy</label>
            <select
              className="select"
              value={token}
              onChange={e => setToken(e.target.value)}
            >
              <option value="usdt">USDT</option>
              <option value="usdc">USDC</option>
              <option value="dai">DAI</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
