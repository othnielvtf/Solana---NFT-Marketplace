import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { alchemy } from './alchemy';

export async function createTransaction(
  fromPubkey: PublicKey,
  amount: number
): Promise<Transaction> {
  const connection = new Connection(alchemy.config.getProvider().connection.url);
  
  // Get the seller's public key (replace with your wallet address)
  const toPubkey = new PublicKey('YOUR_WALLET_ADDRESS');
  
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey,
      toPubkey,
      lamports: amount * LAMPORTS_PER_SOL,
    })
  );

  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = fromPubkey;

  return transaction;
}