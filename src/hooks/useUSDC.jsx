import { useWriteContract, useReadContract } from 'wagmi'
import { USDC_ABI } from '../contracts/usdc.abi'

const usdcAddress = "0x5425890298aed601595a70AB815c96711a31Bc65"


export function useUSDC() {
    const { 
      data: hash, 
      error,
      isPending,
      writeContractAsync 

    } = useWriteContract() 
  
    async function approve(spender, value) {
      writeContractAsync({
        address: usdcAddress,
        abi: USDC_ABI,
        functionName: 'approve',
        args: [spender, value],
      })
    }

  function getAllowance(owner, spender) {
      const {data, error, isReading} = useReadContract({
        address: usdcAddress,
        abi: USDC_ABI,
        functionName: 'allowance',
        args: [owner, spender],
      })
      return {
        data,
        error,
        isReading
      }
    }
  
    return {
      hash,
      error,
      isPending,
      approve,
      getAllowance
    }
  }
  