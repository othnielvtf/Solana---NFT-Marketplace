import React from 'react';
import { WalletContextProvider } from './components/WalletContextProvider';
import { WalletButton } from './components/WalletButton';
import { ProductCard } from './components/ProductCard';
import { ShoppingBag } from 'lucide-react';

const DEMO_PRODUCTS = [
  {
    id: 1,
    name: 'Premium NFT Collection',
    price: 0.5,
    image: 'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Digital Artwork',
    price: 0.3,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Exclusive Membership',
    price: 1.0,
    image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&q=80&w=800',
  },
];

function App() {
  const handleBuy = (productId: number) => {
    console.log(`Initiating purchase for product ${productId}`);
  };

  return (
    <WalletContextProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-purple-600" size={24} />
                <span className="text-xl font-bold text-gray-800">Solana Shop</span>
              </div>
              <WalletButton />
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Solana Commerce
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover exclusive digital collectibles and NFTs. Connect your Phantom wallet to start shopping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEMO_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                onBuy={() => handleBuy(product.id)}
              />
            ))}
          </div>
        </main>

        <footer className="bg-white mt-16 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500">
              © 2024 Solana Shop. All rights reserved. Powered by Solana blockchain.
            </p>
          </div>
        </footer>
      </div>
    </WalletContextProvider>
  );
}

export default App;