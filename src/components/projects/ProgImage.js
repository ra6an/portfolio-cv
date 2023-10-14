import React from "react";

import styles from "./ProgImage.module.css";

const ProgImage = (props) => {
  return (
    <div className={styles.container}>
      <img
        alt="text"
        className={styles["image"]}
        src={props.data.img}
        loading="lazy"
      />
    </div>
  );
};

export default ProgImage;
