import React from "react";
import styles from "../styles/components/ChallengeBox.module.css";

const ChallengeBox = () => {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header> Ganhe 400 xp</header>
          <main>
            <img src="icons/bodt.svg" alt="" />
            <strong>Novo Desafio</strong>
            <p>Levante e faca uma caminhada</p>
            <footer>
              <button type="button" className={styles.challengeFailedButton}>
                {" "}
                Falhei
              </button>
              <button type="button" className={styles.challengeSucceededButton}>
                {" "}
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
