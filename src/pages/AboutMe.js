import React from "react";

import styles from "./AboutMe.module.css";

// COMPONENTS
import AboutMeContainer from "../components/about-me/AboutMeContainer";

const AboutMe = (props) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles["scrollable-container"]}`}>
        <AboutMeContainer data={{ setPath: props.data.setPath }} />
      </div>
    </div>
  );
};

export default AboutMe;
