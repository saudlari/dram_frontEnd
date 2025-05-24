import { useContractRead, useContractWrite, useAccount } from 'wagmi'
import { ERC1155_ABI } from '../contracts/ERC1155'

export function useERC1155(contractAddress) {
  const { address } = useAccount()
  
  const { data: balance, isError, isLoading } = useContractRead({
    address: contractAddress,
    abi: ERC1155_ABI,
    functionName: 'balanceOf',
    args: [address, 1], // tokenId 0 por defecto
    enabled: !!address,
  })

  console.log(balance)

  const { writeAsync: transfer, isLoading: isTransferring } = useContractWrite({
    address: contractAddress,
    abi: ERC1155_ABI,
    functionName: 'safeTransferFrom',
  })

  return {
    balance,
    isLoading,
    isError,
    transfer,
    isTransferring
  }
}
