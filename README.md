# Solana NFT Marketplace

A modern NFT marketplace built on Solana blockchain using Alchemy API.

## 🚀 Live Demo

Check out the live demo: [Solana NFT Marketplace](https://solana-nft-marketplace-lemon.vercel.app/?vercelToolbarCode=pSZ0SOf-3SwuX_W)

## ✨ Features

- Browse and search NFT collections
- Connect Solana wallet
- View NFT details and metadata
- Buy and sell NFTs
- Real-time price updates
- Mobile responsive design

## 🛠️ Built With

- [Solana](https://solana.com/) - Blockchain platform
- [Alchemy API](https://www.alchemy.com/) - Blockchain development platform
- [React.js](https://reactjs.org/) - Frontend framework
- [Web3.js](https://web3js.readthedocs.io/) - Ethereum JavaScript API
- [Phantom Wallet](https://phantom.app/) - Solana wallet

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- Phantom wallet browser extension

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/solana-nft-marketplace.git
   ```

2. Navigate to the project directory
   ```bash
   cd solana-nft-marketplace
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

4. Configure environment variables
   ```bash
   cp .env.example .env
   ```
   Then edit the `.env` file with your credentials:
   ```plaintext
   REACT_APP_ALCHEMY_API_KEY=your_api_key
   REACT_APP_SOLANA_NETWORK=devnet
   REACT_APP_RPC_HOST=https://api.devnet.solana.com
   ```

5. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

## 💻 Development

### Project Structure
solana-nft-marketplace/
├── src/
│ ├── components/ # React components
│ ├── hooks/ # Custom React hooks
│ ├── pages/ # Page components
│ ├── services/ # API services
│ ├── utils/ # Utility functions
│ └── config/ # Configuration files
├── public/ # Static files
└── tests/ # Test files

### Testing

To ensure the quality and functionality of the application, you can run the following tests:

1. **Unit Tests**: Test individual components and functions.
   ```bash
   npm run test
   # or
   yarn test
   ```

2. **End-to-End (E2E) Tests**: Test the entire application flow.
   ```bash
   npm run test:e2e
   # or
   yarn test:e2e
   ```

3. **Linting**: Check for code style issues.
   ```bash
   npm run lint
   # or
   yarn lint
   ```

### Deployment

To deploy the application, follow these steps:

1. **Build the Project**: Prepare the application for production.
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Deploy to Hosting Platform**: Use a platform like Vercel or Netlify.
   ```bash
   # Example for Vercel
   vercel
   ```

   Ensure your environment variables are set up correctly on the hosting platform.

## 🔒 Security

- Always use the latest version of the Phantom wallet.
- Never share your private keys.
- Verify all transactions before signing.
- Test thoroughly on devnet before mainnet deployment.

## ⚡ Performance

The marketplace is optimized for performance:
- Lazy loading of NFT images.
- Caching of NFT metadata.
- Optimized smart contract calls.
- Efficient state management.

## 🐛 Common Issues & Solutions

### Wallet Connection
If you're having trouble connecting your wallet:
1. Ensure the Phantom extension is installed.
2. Switch to the correct Solana network (devnet/mainnet).
3. Clear browser cache and reload.

### Transaction Failures
Common reasons for failed transactions:
- Insufficient SOL balance.
- Network congestion.
- Invalid transaction parameters.

## 📚 Resources

- [Solana Cookbook](https://solanacookbook.com/)
- [Alchemy Documentation](https://docs.alchemy.com/)
- [Phantom Wallet Docs](https://docs.phantom.app/)
- [React.js Documentation](https://reactjs.org/docs)

## 🗺️ Roadmap

- [ ] Multi-wallet support.
- [ ] NFT collection creation.
- [ ] Auction functionality.
- [ ] Bulk listing/delisting.
- [ ] Advanced search filters.
- [ ] Social features integration.


## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For any inquiries or feedback, please contact:

- Your Name - [@cattochaser](https://x.com/cattochaser)

Project Link: [https://github.com/othnielvtf/Solana---NFT-Marketplace](https://github.com/othnielvtf/Solana---NFT-Marketplace)