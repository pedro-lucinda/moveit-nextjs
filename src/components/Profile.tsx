import React from "react";
import styles from "../styles/components/profile.module.css";
const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pedro-lucinda.png" alt="Pedro Lucinda" />
      <div>
        <strong> Pedro Lucinda</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
