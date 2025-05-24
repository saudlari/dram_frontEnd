'use client';

import { http, createStorage, cookieStorage } from 'wagmi'
import { sepolia, mainnet, polygon, avalanche } from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

const projectId = 'fb7d28064791f93f304144668effdc39'

const supportedChains = [mainnet, sepolia, polygon, avalanche];

export const config = getDefaultConfig({
   appName: 'DRAMTOKEN',
   projectId,
   chains: supportedChains,
   ssr: true,
   storage: createStorage({
    storage: cookieStorage,
   }),
   transports: supportedChains.reduce(
     (obj, chain) => ({ ...obj, [chain.id]: http() }), 
     {}
   )
});