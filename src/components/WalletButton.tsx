import { FC, useCallback } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Wallet } from 'lucide-react';

export const WalletButton: FC = () => {
  const { connected, connecting, disconnect, select, publicKey, wallets } = useWallet();

  const handleConnect = useCallback(async () => {
    try {
      // Check if Phantom is installed
      const isPhantomInstalled = window.phantom?.solana?.isPhantom;
      
      if (!isPhantomInstalled) {
        window.open('https://phantom.app/', '_blank');
        alert('Please install Phantom wallet and refresh the page');
        return;
      }

      // Select Phantom wallet
      const phantom = wallets.find(wallet => wallet.adapter.name === 'Phantom');
      if (phantom) {
        await select(phantom.adapter.name);
        try {
          // Explicitly request wallet connection
          await window.phantom?.solana?.connect();
        } catch (err) {
          console.error('Failed to connect to Phantom:', err);
        }
      }
    } catch (error) {
      console.error('Connection error:', error);
      alert('Failed to connect to Phantom wallet. Please try again.');
    }
  }, [select, wallets]);

  const handleClick = () => {
    if (connected) {
      disconnect();
    } else {
      handleConnect();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={connecting}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        connecting
          ? 'bg-gray-400 cursor-wait'
          : 'bg-purple-600 hover:bg-purple-700 text-white'
      }`}
    >
      <Wallet size={20} />
      {connecting
        ? 'Connecting...'
        : connected
        ? `${publicKey?.toString().slice(0, 4)}...${publicKey?.toString().slice(-4)}`
        : 'Connect Wallet'}
    </button>
  );
};