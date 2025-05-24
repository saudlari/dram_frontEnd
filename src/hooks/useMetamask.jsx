import { useState, useCallback } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function useMetamask() {
  const [isPending, setIsPending] = useState(false)
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  const handleConnect = useCallback(async () => {
    if (isPending) return

    try {
      setIsPending(true)
      // Esperar un momento antes de intentar conectar
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const metamask = connectors.find(c => c.id === 'injected')
      if (!metamask) {
        throw new Error('Metamask no encontrado')
      }

      await connect({ connector: metamask })
    } catch (error) {
      console.error('Error de conexión:', error)
    } finally {
      setIsPending(false)
    }
  }, [connect, connectors, isPending])

  return {
    address,
    isConnected,
    isPending,
    connect: handleConnect,
    disconnect
  }
}
