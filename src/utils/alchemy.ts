import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API_KEY || 'demo',
  network: Network.SolanaDevnet,
};

export const alchemy = new Alchemy(settings);