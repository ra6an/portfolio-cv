import React from "react";

import styles from "./SliderPaggination.module.css";

const SliderPaggination = (props) => {
  const aboutMe =
    props.data.content === 0 ? styles["dot-active"] : styles["dot-inactive"];
  const technology =
    props.data.content === 1 ? styles["dot-active"] : styles["dot-inactive"];
  const projects =
    props.data.content === 2 ? styles["dot-active"] : styles["dot-inactive"];

  const changeContent = (e) => {
    e.preventDefault();

    props.data.setContent(Number(e.target.id));
  };
  return (
    <div className={styles.container}>
      <div className={aboutMe} id={0} onClick={changeContent}></div>
      <div className={technology} id={1} onMouseDown={changeContent}></div>
      <div className={projects} id={2} onMouseDown={changeContent}></div>
    </div>
  );
};

export default SliderPaggination;
