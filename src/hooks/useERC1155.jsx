import { useWriteContract, useAccount} from 'wagmi'
import { DRAM_SALE_METADATA } from '../contracts/dramsaleMetadata'

const contractAddress =  "0xb1b5b8822e58f5a6a843caa144f79853b45c60ce";

export function useERC1155() {
  const { address } = useAccount()

  const { 
    data: hash, 
    error,
    isPending,
    writeContract 
  } = useWriteContract() 

  async function buyToken(amount, tokenId) {
    writeContract({
      address: contractAddress,
      abi: DRAM_SALE_METADATA.abi,
      functionName: 'buyToken',
      args: [amount, tokenId],
    })
  }
  return {
    hash,
    error,
    isPending,
    buyToken,
  }
  //const { data: balance, isE_amount"rror, isLoading, writeContract } = useWriteContract({
   // data: address: contractAddress,
    //abi: DRAM_METADATA.abi,
    //functionName: 'balanceOf',
    //args: [address, 1],
    //enabled: !!address,
  //})

  //console.log("balance:", balance)

 ///    const { writeAsync: transfer, isLoading: isTransferring } = useContractWrite({
    //address: contractAddress,
    //abi: DRAM_SALE_METADATA.abi,
    //functionName: 'safeTransferFrom'
  //})

  //const { config } = usePrepareContractWrite({
    //address: contractAddress,
     //abi: DRAM_SALE_METADATA.abi,
    //functionName: 'buyToken',
  //});

 /// const { writeAsync: buyToken, isLoading: isBuying } = useContractWrite(config);

 // return {
 //   balance,
 //   isLoading,
 //   isError,
 //   transfer,
 //   isTransferring,
 //   buyToken,
 //   isBuying
  //}


}
