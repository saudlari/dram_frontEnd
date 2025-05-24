import { createConfig, http } from 'wagmi'
import { avalanche, avalancheFuji } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [avalanche, avalancheFuji],
  connectors: [
    injected({
      shimDisconnect: true,
      name: 'Metamask',
      timeout: 5000
    })
  ],
  transports: {
    [avalanche.id]: http(),
    [avalancheFuji.id]: http(),
  },
})