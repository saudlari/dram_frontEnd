import { useERC1155 } from "../hooks/useERC1155";
import Button from "./buttons/Button";
import React from "react";
import { useAccount } from "wagmi";
import { useUSDC } from "../hooks/useUSDC";

export default function CardBond() {
  const { address } = useAccount();
  const { hash, isPending, buyToken } = useERC1155();
  const { getAllowance, approve } = useUSDC();

  //const unlimitedAmount = 1000000000000000;
  const smartContract = "0xef7528f2f5f2bdac47e71cf29e8db5d351b3ce54";
  const priceToken = 1;
  const tokenId = 1;

  const handleBuy = async () => {
    try {
      await buyToken(priceToken, tokenId);
      console.log("hash:", hash);
      console.log("buy is ok");
    } catch (error) {
      console.error("Error buyToken", error);
    }
  };

  const handleSell = async () => {
    try {
      await transfer({
        args: [address, "DIRECCIÓN_DESTINO", 0, 1, "0x"],
      });
    } catch (error) {
      console.error("Error sellToken", error);
    }
  };

  const handleApprove = async () => {
    try {
     // const {data, error, isPending} = await getAllowance(address, smartContract);
      //if (data < priceToken) {
        await approve(smartContract, priceToken);
      //}
    } catch (error) {
      console.error("Error in handleApprove", error);
    }
  };
  let enabledApprove = false;
  const {data: allowance, error, isReading} =  getAllowance(address, smartContract);
   if (allowance < priceToken){
    enabledApprove = true; 
   }
   console.log("wallet address:", address);
   console.log("enabledApprove:", enabledApprove);
   console.log("data:", allowance);
   console.log("error:", error);
   console.log("isReading:", isReading);

  return (
    <div className="flex items-center justify-center py-12">
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body">
          <h2 className="card-title text-center">BUY WHISKY FRACTION</h2>
          <div className="mb-2 text-sm">
            Balance:{" "}
            {/*isLoading ? "Loading..." : balance?.toString() || "0"}*/}
          </div>

          <div className="card-actions justify-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              <Button
                onClick={handleBuy}
                disabled={!!enabledApprove}
                variant="primary"
              >
                Buy Now
              </Button>
              <Button
                onClick={handleSell}
                //  disabled={isTransferring}
                variant="secondary"
              >
                Sell
              </Button>

              <Button onClick={handleApprove} variant="secondary" disabled={!!!enabledApprove}>
                Approve
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
              placeholder="Quantity to be bought"
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
