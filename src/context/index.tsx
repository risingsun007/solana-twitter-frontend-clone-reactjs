
import React from 'react'
import { SolanaProvider } from './SolanaContext';
import { ProfileProvider } from './ProfileContext'
import { TweetsProvider } from './TweetsContext'

export default function AppContext({ children }: any) {
  return (
    <SolanaProvider>
      <ProfileProvider>
        <TweetsProvider>
          {children}
        </TweetsProvider>
      </ProfileProvider>
    </SolanaProvider>
  );
}