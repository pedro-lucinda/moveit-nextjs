import React, { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/profile.module.css";
const Profile = () => {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pedro-lucinda.png" alt="Pedro Lucinda" />
      <div>
        <strong> Pedro Lucinda</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
