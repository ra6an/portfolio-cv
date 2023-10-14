import React from "react";

import styles from "./ArchProjCard.module.css";

// COMPONENTS
import ArchDetails from "./ArchDetails";
import ArchImage from "./ArchImage";

const ArchProjCard = (props) => {
  return (
    <div
      className={styles.container}
      style={{ width: `${100 / props.numOfProjects}%` }}
    >
      <div className={styles["right-border"]} />
      <ArchDetails data={props.data} />
      <ArchImage data={props.data} />
    </div>
  );
};

export default ArchProjCard;
