import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

import useWorkspace from '../hooks/useWorkspace';
import { getProfile, createProfile } from '../api';
import { Profile, ProfileData } from '../models'

const ProfileContext = React.createContext<Profile | null>(null);

export function ProfileProvider<React>({ children }: any) {
    const [loaded, setLoaded] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData | null >(null);
    const workspace = useWorkspace();

    const { publicKey } = useWallet();
    useEffect(() => {
        const updateProfile = async () => {
            if(publicKey){
              setProfileData(await getProfile(workspace.program, publicKey));
                setLoaded(true);
            }
        };

        const clearProfile = () => {
          setProfileData(null);
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
            setProfileData(newProfile);
        },
        [workspace, profileData],
    );

    const value = useMemo(
        () => ({
          profileData,
          updateProfile: createProfileAndUpdate,
          loaded,
        }),
        [loaded, profileData, createProfileAndUpdate],
    );

    return (
        <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
    );
}

export default ProfileContext;