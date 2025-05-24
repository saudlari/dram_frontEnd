import Button from "./buttons/Button";
import React from "react";

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
            <label className="label mt-4">Balance</label>
            <div className="mb-2 text-sm">
              {/* Balance aquí */}
            </div>

            <label className="label mt-4">Price</label>
            <input type="text" className="input" value="100 USDT" readOnly />

            <label className="label mt-4">Amount</label>
            <input
              type="number"
              className="input"
              placeholder="Cantidad a comprar"
              min="0"
              step="any"
            />

            <label className="label mt-4">Token to buy</label>
            <select className="select">
              <option value="usdt">USDT</option>
              <option value="usdc">USDC</option>
              <option value="dai">DAI</option>
              <option value="avax">AVAX</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
