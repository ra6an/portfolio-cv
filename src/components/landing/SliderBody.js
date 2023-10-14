import React from "react";

import styles from "./SliderBody.module.css";

// COMPONENTS
import Technology from "./Technology";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

const SliderBody = (props) => {
  const contentNumber = {
    transform: `translateX(-${33.33 * props.data.content}%)`,
  };
  return (
    <div className={styles.body}>
      <div className={styles.content} style={contentNumber}>
        <AboutMe className={styles["about-me"]} />
        <Technology className={styles["technology"]} />
        <Contact className={styles["contact"]} />
      </div>
    </div>
  );
};

export default SliderBody;
