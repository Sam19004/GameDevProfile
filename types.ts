export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  genres: string[]; // e.g., ["Web", "React", "RPG"]
  techStack: string[];
  featured: boolean;
  githubRepo: string;
  liveLink?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Legendary';
  timeToCompletion: string;
  xpEarned: string[]; // Bullet points of learnings
  coreAchievements: string[]; // Specific technical feats
  coverImage: string;
  screenshots: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: 'Internship' | 'Certification' | 'Award' | 'Education';
}

export interface UserProfile {
  name: string;
  title: string;
  location: string;
  avatar: string;
  bio: string;
  level: number;
  totalXp: string;
}

export type ViewState = 'HOME' | 'PROFILE' | 'CONTACT';