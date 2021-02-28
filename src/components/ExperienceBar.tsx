import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/experienceBar.module.css";

export function ExperienceBar() {
  const { currentExperience, experienceToNextNevel } = useContext(
    ChallengeContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextNevel;

  return (
    <header className={styles.experienceBar}>
      <span> 0 px </span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span> {experienceToNextNevel} px </span>
    </header>
  );
}
