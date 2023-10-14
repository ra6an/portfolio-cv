import React from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import styles from "./SingleJob.module.css";

const SingleJob = (props) => {
  const details = props.data.details;
  const currActive = props.data.currActive;
  const setCurrActive = props.data.setCurrActive;

  const onClickHandler = (e) => {
    e.preventDefault();
    if (currActive !== details.id) setCurrActive(details.id);
    if (currActive === details.id) setCurrActive(null);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["job-header"]} onClick={onClickHandler}>
        <div
          className={`${styles["job-background"]} ${styles[props.data.title]}`}
          style={
            currActive === details.id
              ? { transform: "scale(100%)" }
              : { transform: "scale(0%)" }
          }
        />
        <div
          className={styles["job-company"]}
          style={currActive === details.id ? { justifyContent: "center" } : {}}
        >
          {details.company}
        </div>
        <div
          className={styles["job-months"]}
        >{`(${details.months} months)`}</div>
        <button className={styles["job-btn"]}>
          {currActive === details.id ? (
            <RiArrowUpSLine
              style={{ color: `var(--${props.data.title}-icon)` }}
              className={`${styles["job-btn-icon"]} ${
                currActive === details.id ? styles.show : styles.hide
              }`}
            />
          ) : (
            <RiArrowDownSLine
              style={{ color: `var(--${props.data.title}-icon)` }}
              className={`${styles["job-btn-icon"]} ${
                currActive === details.id ? styles.hide : styles.show
              }`}
            />
          )}
        </button>
      </div>
      {currActive === details.id && (
        <div className={styles["job-body"]}>
          <div className={styles["job-body--overflow"]}>
            <div
              className={`${styles["job-body--description"]} ${
                currActive === details.id ? styles.down : ""
              }`}
            >
              <div className={styles["job-body-tech"]}>
                <h4 className={styles["job-subtitle"]}>Tech: </h4>
                <p>{details.tech}</p>
              </div>
              <div className={styles["job-body-tech"]}>
                <h4 className={styles["job-subtitle"]}>Type: </h4>
                <p>{details.type}</p>
              </div>
              {details.description}
            </div>
          </div>
        </div>
      )}
      <div
        className={`${styles["horizontal-line"]} ${styles[props.data.title]}`}
        style={currActive === details.id ? { width: "30%" } : { width: "0%" }}
      />
    </div>
  );
};

export default SingleJob;
