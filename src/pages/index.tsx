//home do site
import React from "react";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from "../styles/pages/Home.module.css";

import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";
import { CountDownContexProvider } from "../contexts/CountDownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Moveit </title>
      </Head>

      <ExperienceBar />
      <CountDownContexProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownContexProvider>
    </div>
  );
}
