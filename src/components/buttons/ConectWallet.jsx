import { useMetamask } from '../../hooks/useMetamask'

export default function ConectWallet() {
  const { address, isConnected, isPending, connect, disconnect } = useMetamask()

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <button 
          className="btn btn-error btn-sm" 
          onClick={disconnect}
        >
          Conectar Wallet
        </button>
      </div>
    )
  }

  return (
    <button
      className="btn btn-primary btn-sm"
      onClick={connect}
      disabled={isPending}
    >
      {isPending ? 'Conectando...' : 'Conectar Wallet'}
    </button>
  )
}
