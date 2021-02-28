import { ReactNode } from "react";

export interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

export interface ChallengesContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  challengesCompleted: number;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
	resetChallenge: () => void;
  experienceToNextNevel: number;
  completedChallenge: () => void;
}

export interface ChallengeContextProviderProps {
  children: ReactNode;
}

export interface CountdownContextProviderProps {
  children: ReactNode;
}

export interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  resetCountdown: () => void;
  startCountdown: () => void;
}