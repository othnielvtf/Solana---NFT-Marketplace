import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { ShoppingCart } from 'lucide-react';
import { createTransaction } from '../utils/transactions';

interface ProductProps {
  name: string;
  price: number;
  image: string;
  onBuy: () => void;
}

export const ProductCard: FC<ProductProps> = ({ name, price, image, onBuy }) => {
  const { connected, publicKey, signTransaction } = useWallet();

  const handlePurchase = async () => {
    if (!publicKey || !signTransaction) return;

    try {
      const transaction = await createTransaction(publicKey, price);
      const signedTx = await signTransaction(transaction);
      
      // Send the transaction
      const txId = await window.phantom?.solana?.request({
        method: 'signAndSendTransaction',
        params: {
          message: signedTx.serialize(),
        },
      });

      console.log('Transaction sent:', txId);
      onBuy();
    } catch (error) {
      console.error('Transaction failed:', error);
      alert('Transaction failed. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-purple-600">{price} SOL</p>
          <button
            onClick={handlePurchase}
            disabled={!connected}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              connected
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            <ShoppingCart size={20} />
            {connected ? 'Buy Now' : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </div>
  );
};