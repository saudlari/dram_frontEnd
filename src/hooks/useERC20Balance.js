// src/hooks/useERC20Balance.js
import { useState, useEffect } from "react";
import Web3 from "web3";

const ERC20_ABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    type: "function",
  },
];

export function useERC20Balance(tokenAddress, account) {
  const [balance, setBalance] = useState("");
  const [decimals, setDecimals] = useState(18);

  useEffect(() => {
    if (!tokenAddress || !account) return;
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(ERC20_ABI, tokenAddress);
    (async () => {
      try {
        const tokenDecimals = await contract.methods.decimals().call();
        setDecimals(tokenDecimals);
        const result = await contract.methods.balanceOf(account).call();
        setBalance((result / 10 ** tokenDecimals).toString());
      } catch (err) {
        setBalance("0.00");
      }
    })();
  }, [tokenAddress, account]);

  return { balance, decimals };
}