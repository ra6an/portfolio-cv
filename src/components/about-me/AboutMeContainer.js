import React from "react";

import styles from "./AboutMeContainer.module.css";

// COMPONENTS
import ShortBio from "./ShortBio";
import ArchitectureContent from "./ArchitectureContent";
import ProgrammingContent from "./ProgrammingContent";
import Footer from "../footer/Footer";

const AboutMeContainer = (props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["bio-section"]}>
        <div className={styles["width-container"]}>
          <ShortBio />
        </div>
      </div>
      <div className={styles["architecture-section"]}>
        <div className={styles["header-container"]}>
          <h2 className={styles["header-architecture"]}>
            ARCHITECTU
            <span
              style={{
                color: "var(--color-main-hover)",
              }}
            >
              R
            </span>
            E
          </h2>
          <div className={styles["fill-architecture"]}></div>
        </div>
        <div className={styles["width-container"]}>
          <ArchitectureContent data={{ setPath: props.data.setPath }} />
        </div>
      </div>
      <div className={styles["programming-section"]}>
        <div className={styles["header-container"]}>
          <div className={styles["fill-programming"]}></div>
          <h2 className={styles["header-programming"]}>
            P
            <span
              style={{
                color: "var(--yellow)",
              }}
            >
              R
            </span>
            OGRAMMING
          </h2>
        </div>
        <div className={styles["width-container"]}>
          <ProgrammingContent data={{ setPath: props.data.setPath }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMeContainer;
