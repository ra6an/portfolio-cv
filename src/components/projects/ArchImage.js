import React from "react";

import styles from "./ArchImage.module.css";

const ArchImage = (props) => {
  return (
    <div className={styles["container-img"]}>
      <div className={styles["image-overlay"]} />
      <img
        alt={props.data.details.img}
        src={props.data.details.img}
        className={styles["image"]}
        loading="lazy"
      />
    </div>
  );
};

export default ArchImage;
