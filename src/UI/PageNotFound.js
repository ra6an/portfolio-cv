import React from "react";

import styles from "./PageNotFound.module.css";

const PageNotFound = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles["text"]}>404 Page Not Found</p>
    </div>
  );
};

export default PageNotFound;
