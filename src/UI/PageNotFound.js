import React from "react";

import styles from "./PageNotFound.module.css";

const PageNotFound = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles["text"]}>
        <span>404</span>
        <p>Not Found</p>
      </div>
    </div>
  );
};

export default PageNotFound;
