import React from "react";

import styles from "./Logo.module.css";

// IMAGES
import imgWhite from "../../../images/Rwhite.png";
import imgOrange from "../../../images/Rorange.png";

const Logo = (props) => {
  return (
    <div
      className={styles.container}
      style={
        props.data.isHome
          ? { backgroundColor: "var(--white)" }
          : { backgroundColor: "var(--transparent)" }
      }
    >
      <div className={styles["img-container"]}>
        <img
          alt="My Logo Raban"
          className={`${styles.image} ${styles.home}`}
          src={imgOrange}
          style={
            props.data.isHome
              ? { transform: `translateY(-20%)` }
              : { transform: `translateY(20%)` }
          }
        />
        <img
          alt="My Logo Raban"
          className={`${styles["image-absolute"]} ${styles.home}`}
          src={imgWhite}
          style={
            props.data.isHome
              ? { transform: `translateY(-20%)` }
              : { transform: `translateY(20%)`, filter: `contrast(0%)` }
          }
        />
      </div>
    </div>
  );
};

export default Logo;
