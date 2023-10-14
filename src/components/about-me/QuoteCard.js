import React from "react";

import styles from "./QuoteCard.module.css";

import quoteImg from "../../images/quote-grey.png";

// DATA
import data from "../../data";

const QuoteCard = (props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["quote-card-bg"]}>
        <div className={styles["quote-card-background"]} />
        <div className={styles["quote-card"]}>
          <img
            alt="quote-character"
            className={styles["quote-img"]}
            src={quoteImg}
          />
          <p className={styles["quote-text"]}>
            {data.aboutMeQoute.architecture}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
