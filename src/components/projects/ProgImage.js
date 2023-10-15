import React, { useState } from "react";

import styles from "./ProgImage.module.css";

const ProgImage = (props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.container}>
      <img
        alt="blured project"
        className={styles["image-lazy"]}
        src={props.data.imgLazy}
      />
      <img
        alt={`project`}
        style={loaded ? { opacity: "1" } : { opacity: "0" }}
        className={`${styles["image"]}`}
        src={props.data.img}
        onLoad={() => {
          setLoaded(true);
        }}
        loading="lazy"
      />
    </div>
  );
};

export default ProgImage;
