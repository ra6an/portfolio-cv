import React from "react";

import styles from "./HobbieContainer.module.css";

// COMPONENTS
import HobbieCard from "./HobbieCard";

const HobbieContainer = (props) => {
  const helper = 100 * props.hobbies.length;

  const render = props.hobbies.map((h, i) => {
    return (
      <HobbieCard
        data={h}
        id={i}
        key={i}
        length={props.hobbies.length}
        currHobbie={props.currHobbie}
      />
    );
  });
  return (
    <div className={styles["container"]}>
      <div
        className={styles["inner-container"]}
        style={{
          width: `${helper}%`,
          transform: `translateX(-${
            (100 / props.hobbies.length) * props.currHobbie
          }%)`,
        }}
      >
        {render}
      </div>
    </div>
  );
};

export default HobbieContainer;
