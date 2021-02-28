import React, { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { CountDownContext } from "../contexts/CountDownContext";
import styles from "../styles/components/ChallengeBox.module.css";

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(
    ChallengeContext
  );

  const { resetCountdown } = useContext(CountDownContext);

  function handleChallengeSucceeded() {
    completedChallenge();
    resetCountdown();
  }

  function handleChallengefailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header> Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
            <footer>
              <button
                onClick={handleChallengefailed}
                type="button"
                className={styles.challengeFailedButton}
              >
                Falhei
              </button>
              <button
                onClick={handleChallengeSucceeded}
                type="button"
                className={styles.challengeSucceededButton}
              >
                Completei
              </button>
            </footer>
          </main>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong> Finalize um ciclo para receber um desafio </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios!
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
