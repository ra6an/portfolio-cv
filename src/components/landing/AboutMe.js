import React, { useState } from "react";

import styles from "./AboutMe.module.css";

// IMAGES
import image from "../../images/ad2.png";

// DATA
import data from "../../data";

const AboutMe = (props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={props.className}>
      <div className={styles["about-me-body"]}>
        <img
          src={image}
          className={styles["image"]}
          alt="Selfie of Adnan Dacić"
          style={loaded ? { opacity: "1" } : { opacity: "0" }}
          onLoad={() => {
            setLoaded(true);
          }}
          loading="lazy"
        />
        <p className={styles["text"]}>{data.homeQuotes}</p>
      </div>
    </div>
  );
};

export default AboutMe;
