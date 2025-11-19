export interface CommunityPost {
  id: number;
  user: string;
  title: string;
  replies: number;
  likes: number;
}

export interface UserProfile {
  name: string;
  level: number;
  xp: number;
  joinedDate: string;
}

export const MOCK_COMMUNITY_POSTS: CommunityPost[] = [
  { id: 1, user: "NeonRider", title: "Best prompt for creative writing?", replies: 42, likes: 156 },
  { id: 2, user: "AI_Wizard", title: "Wildcord v2 feature request", replies: 12, likes: 89 },
  { id: 3, user: "PixelArtist", title: "Generated these amazing landscapes", replies: 8, likes: 230 },
  { id: 4, user: "DevOpsGuy", title: "Gemini API latency optimization", replies: 25, likes: 45 },
];

export const USER_STATS: UserProfile = {
  name: "WildUser_001",
  level: 5,
  xp: 2450,
  joinedDate: "Oct 2023",
};
