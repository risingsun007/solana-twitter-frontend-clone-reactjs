import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  ExodusWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';


const cluster = process.env.NEXT_PUBLIC_SOLANA_CLUSTER;
const network =
  cluster === 'mainnet'
    ? WalletAdapterNetwork.Mainnet
    : WalletAdapterNetwork.Devnet;
const endpoint = clusterApiUrl(network);
type Commitment =
  | 'processed'
  | 'confirmed'
  | 'finalized'
  | 'recent'
  | 'single'
  | 'singleGossip'
  | 'root'
  | 'max';

const commitment = process.env.NEXT_PUBLIC_SOLANA_COMMITMENT as Commitment || undefined;
let config = {} as any;
if (commitment) {
  config["commitment"] = "processed";
}
console.log(`endpoint: ${endpoint}`)

const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
];

export function SolanaProvider({ children }: any) {
  return (
    <ConnectionProvider config={config} endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}