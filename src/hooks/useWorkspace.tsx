import { Program, AnchorProvider, Wallet, Idl } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import { useAnchorWallet, useConnection, AnchorWallet, ConnectionContextState } from '@solana/wallet-adapter-react';
import { useMemo } from 'react';
import { type Connection } from '@solana/web3.js';

import idl from '../idl/tweet.json';

const programId = new PublicKey(idl.solanaAddress);
const commitment = "processed";

export interface Workspace {
  connection: Connection;
  wallet: AnchorWallet | undefined;
  provider: AnchorProvider,
  program: Program<Idl>,

}

export default function useWorkspace(): Workspace {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();
  const provider = useMemo(
    () =>
      (new AnchorProvider(connection, wallet as Wallet, { commitment }))
    ,
    [connection, wallet],
  );
  const program = useMemo(
    () => new Program(idl as Idl, programId, provider),
    [provider],
  );
  const workspace = useMemo(
    () => ({
      connection,
      program,
      provider,
      wallet,
    }),
    [connection, program, provider, wallet],
  );
  return workspace;
}