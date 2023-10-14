import React from "react";

import styles from "./ProgrammingContent.module.css";

// COMPONENTS
import DetailsCard from "./DetailsCard";
import QuoteCardTwo from "./QuoteCardTwo";

// DATA
import data from "../../data";

const ProgrammingContent = (props) => {
  return (
    <div className={styles["container"]}>
      <QuoteCardTwo />
      <DetailsCard
        data={{
          setPath: props.data.setPath,
          tech: data.programmingTech,
          jobs: data.programmingJobs,
          title: "programming",
        }}
      />
    </div>
  );
};

export default ProgrammingContent;
