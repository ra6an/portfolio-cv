import React from "react";

import styles from "./ProgProjectDetails.module.css";

const ProgProjectDetails = (props) => {
  const details = props.data.details;
  return (
    <div className={styles.container}>
      <div className={styles["background-back"]} />
      <div className={styles["background-front"]} />
      <div className={styles.number}>{details.id}</div>
      <div className={styles["title-container"]}>
        <div className={styles["dot"]} />
        <p className={styles["title"]}>{details.title}</p>
        <div
          className={styles["vertical-line"]}
          style={{ height: "50%", transform: "translate(-50%, 100%)" }}
        />
      </div>
      <div className={styles["tech-container"]}>
        <div className={styles["dot"]} />
        <p className={styles["tech"]}>Tech: {details.tech}</p>
        <div className={styles["vertical-line"]} style={{ height: "100%" }} />
      </div>
      <div className={styles["url-container"]}>
        <div className={styles["dot"]} style={{ width: "2.4rem" }} />
        <a
          href={details.url}
          className={styles["url"]}
          target="_blank"
          rel="noreferrer"
        >
          {details.url}
        </a>
        <div className={styles["vertical-line"]} style={{ height: "100%" }} />
      </div>
      <div className={styles["description-container"]}>
        <div className={styles["dot"]} />
        <p className={styles["description"]}>{details.description}</p>
        <div className={styles["vertical-line"]} style={{ height: "50%" }} />
      </div>
    </div>
  );
};

export default ProgProjectDetails;
