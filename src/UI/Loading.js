import React from "react";

import styles from "./Loading.module.css";

// IMAGES
import logoOrangeImg from "../images/Rorange.png";
import logoGreenImg from "../images/Rgreen.png";

const Loading = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles["container-green"]}>
        <img
          alt="Green logo"
          src={logoGreenImg}
          className={`${styles["logo"]} ${styles["green"]}`}
        />
      </div>
      <div className={styles["container-orange"]}>
        <img
          alt="Orange logo"
          src={logoOrangeImg}
          className={`${styles["logo"]} ${styles["orange"]}`}
        />
      </div>
    </div>
  );
};

export default Loading;
