import React from "react";

import styles from "./ArchitectureContent.module.css";

// COMPONENTS
import DetailsCard from "./DetailsCard";
import QuoteCard from "./QuoteCard";

// DATA
import data from "../../data";

const ArchitectureContent = (props) => {
  return (
    <div className={styles["container"]}>
      <DetailsCard
        data={{
          setPath: props.data.setPath,
          jobs: data.architectureJobs,
          tech: data.architectureTech,
          title: "architecture",
        }}
      />
      <QuoteCard />
    </div>
  );
};

export default ArchitectureContent;
