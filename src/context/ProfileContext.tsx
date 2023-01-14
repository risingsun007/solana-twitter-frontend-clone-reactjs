import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

import useWorkspace from '../hooks/useWorkspace';
import { getProfile, createProfile } from '../api';
import { Profile } from '../models'

export interface ProfileContextOutput {
    loaded: boolean,
    profile: Profile | null,
    createProfile: (name: string, avatarUrl: any, location: any) => void
}

const ProfileContext = React.createContext<ProfileContextOutput | null>(null);

export function ProfileProvider<React>({ children }: any) {
    const [loaded, setLoaded] = useState(false);

    const [profile, setProfile] = useState<Profile | null >(null);

    const workspace = useWorkspace();

    // Update profile on workspace changes.
    const { publicKey } = useWallet();
    useEffect(() => {
        const updateProfile = async () => {
            if(publicKey){
                setProfile(await getProfile(workspace.program, publicKey));
                setLoaded(true);
            }
        };

        const clearProfile = () => {
            setProfile(null);
        };

        if (publicKey) {
            updateProfile();
        } else {
            clearProfile();
        }
    }, [workspace, publicKey]);

    const createProfileAndUpdate = useCallback(
        async (name: string, avatarUrl: string, location: string) => {
            const newProfile = await createProfile(workspace, name, avatarUrl, location);
            console.log(`createProfileAndUpdate: ${newProfile}`)
            setProfile(newProfile);
            console.log(`createProfileAndUpdate after: ${profile}`)
        },
        [workspace, profile],
    );

    const value = useMemo(
        () => ({
            loaded,
            profile,
            createProfile: createProfileAndUpdate,
        }),
        [loaded, profile, createProfileAndUpdate],
    );

    return (
        <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
    );
}

export default ProfileContext;