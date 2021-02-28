import { createContext, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";
import { CountdownContextData, CountdownContextProviderProps } from "./types";

export const CountDownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountDownContexProvider({
  children,
}: CountdownContextProviderProps) {
  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    //cancel the timeout
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
		setHasFinished(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}
