/// <reference types="vite/client" />

interface Window {
  phantom?: {
    solana?: {
      isPhantom?: boolean;
      connect(): Promise<{ publicKey: string }>;
      disconnect(): Promise<void>;
      request(args: { method: string; params: any }): Promise<any>;
    };
  };
}