import React, { useState } from "react";

import styles from "./ArchImage.module.css";

const ArchImage = (props) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={styles["container-img"]}>
      {/* <div className={styles["image-overlay"]} /> */}
      <img
        alt={props.data.details.img}
        src={props.data.details.img}
        style={loaded ? { opacity: "1" } : { opacity: "0" }}
        className={styles["image"]}
        onLoad={() => {
          setLoaded(true);
        }}
        loading="lazy"
      />
      <img
        alt={props.data.details.imgLazy}
        src={props.data.details.imgLazy}
        className={styles["image-lazy"]}
      />
    </div>
  );
};

export default ArchImage;
