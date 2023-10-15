import React, { useState } from "react";

import styles from "./HobbieCard.module.css";

const HobbieCard = (props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`${styles["container"]}`}
      style={
        props.currHobbie === props.id
          ? {
              width: `${100 / props.length}%`,
            }
          : {
              width: `${100 / props.length}%`,
            }
      }
    >
      <div
        className={styles["inner-container"]}
        style={
          props.currHobbie === props.id
            ? {
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              }
            : {
                boxShadow:
                  "rgba(0, 0, 0, 0.0) 0px 10px 20px, rgba(0, 0, 0, 0.0) 0px 6px 6px",
              }
        }
      >
        <div
          className={styles.filter}
          style={
            props.currHobbie === props.id
              ? { background: "none", zIndex: 0 }
              : {
                  backgroundColor: "var(--hobbie-overlay)",
                  backdropFilter: "blur(0.2rem)",
                  zIndex: 15,
                }
          }
        />
        <div className={styles["hobbie-content"]}>
          <h2>{props.data.title}</h2>
          <p>{props.data.description}</p>
        </div>
        <div className={styles["hobbie-image"]}>
          <img
            alt={props.data.img}
            src={props.data.img}
            onLoad={() => {
              setLoaded(true);
            }}
            className={styles["img"]}
            style={loaded ? { opacity: "1" } : { opacity: "0" }}
            loading="lazy"
          />
          <img
            alt={props.data.imgLazy}
            src={props.data.imgLazy}
            className={styles["img-lazy"]}
          />
        </div>
      </div>
    </div>
  );
};

export default HobbieCard;
