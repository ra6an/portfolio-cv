import React from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

import styles from "./Slider.module.css";

// COMPONENTS
import SliderBody from "./SliderBody";

const Slider = (props) => {
  const incrementHandler = (e) => {
    e.preventDefault();

    if (props.data.content === 0) {
      props.data.setContent(props.data.content + 1);
    } else if (props.data.content >= 2 || props.data.content < 0) {
      props.data.setContent(0);
    } else {
      props.data.setContent(props.data.content + 1);
    }
  };

  const decrementHandler = (e) => {
    e.preventDefault();

    if (props.data.content === 0) {
      props.data.setContent(2);
    } else if (props.data.content > 2 || props.data.content < 0) {
      props.data.setContent(0);
    } else {
      props.data.setContent(props.data.content - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles["carousel-slider-btns"]} ${styles["left"]}`}>
        <button
          className={`${styles["carousel-slider-btn"]}`}
          onClick={decrementHandler}
        >
          <MdArrowBackIosNew className={styles["carousel-btn"]} />
        </button>
      </div>
      <SliderBody data={props.data} />
      <div className={`${styles["carousel-slider-btns"]} ${styles["right"]}`}>
        <button
          className={`${styles["carousel-slider-btn"]}`}
          onClick={incrementHandler}
        >
          <MdArrowForwardIos className={styles["carousel-btn"]} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
