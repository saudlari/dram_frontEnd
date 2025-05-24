import { useERC1155 } from '../hooks/useERC1155'
import Button from "./buttons/Button";
import React from "react";
import { useAccount } from 'wagmi'


const CONTRACT_ADDRESS = "0x91899Dd3E3d5C7a2DE831b1F7e3065995810D0E1" // Tu dirección del contrato

export default function CardBond() {
  const { address } = useAccount()
  const { balance, isLoading, transfer, isTransferring } = useERC1155(CONTRACT_ADDRESS)

  const handleBuy = async () => {
    try {
      // Lógica de compra aquí
      console.log("Comprando...")
    } catch (error) {
      console.error('Error en compra:', error)
    }
  }

  const handleSell = async () => {
    try {
      await transfer({
        args: [address, "DIRECCIÓN_DESTINO", 0, 1, "0x"],
      })
    } catch (error) {
      console.error('Error en venta:', error)
    }
  }

  return (
    <div className="flex items-center justify-center py-12">
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body">
          <h2 className="card-title text-center">DRAMTOKEN</h2> 
          <div className="mb-2 text-sm">
            Balance: {isLoading ? "Loading..." : balance?.toString() || "0"}
          </div>

          <div className="card-actions justify-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              <Button 
                onClick={handleBuy}
                disabled={isTransferring}
                variant="primary"
              >
                Buy Now
              </Button>
              <Button 
                onClick={handleSell}
                disabled={isTransferring}
                variant="secondary"
              >
                Sell
              </Button>
            </div>
          </div>


          <form className="mt-4">
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
