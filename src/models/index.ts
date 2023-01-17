interface Profile {
  profileData: ProfileData | null;
  updateProfile: (name: string, avatarUrl: string, location: string) => void
  loaded: boolean;
};

interface ProfileData {
  name: string,
  avatarUrl: string,
  location: string  
}

interface Tweet {
  avatar: string;
  author: string;
  twitteruser: string;
  posttime: number;
  posttext: string;
  likecount: number;
  authorName?: string;
  postimage?: string;
  retweet?: boolean;
  commentscount?: number;
  retweetscount?: number;
  creator?: string;
}



export type { ProfileData, Profile, Tweet }