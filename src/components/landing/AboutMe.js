import React from "react";

import styles from "./AboutMe.module.css";

import image from "../../images/ad2.png";

// DATA
import data from "../../data";

const AboutMe = (props) => {
  return (
    <div className={props.className}>
      <div className={styles["about-me-body"]}>
        <img
          src={image}
          className={styles["image"]}
          alt="Selfie of Adnan Dacić"
          loading="lazy"
        />
        <p className={styles["text"]}>{data.homeQuotes}</p>
      </div>
    </div>
  );
};

export default AboutMe;
