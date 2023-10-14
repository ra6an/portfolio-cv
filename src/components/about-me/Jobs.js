import { useState } from "react";

import styles from "./Jobs.module.css";

// COMPONENTS
import SingleJob from "./SingleJob";

const Jobs = (props) => {
  const [currActive, setCurrActive] = useState(0);
  const jobs = props.data.list;

  const render = jobs.map((job) => (
    <SingleJob
      key={job.id}
      data={{
        details: job,
        currActive,
        setCurrActive,
        title: props.data.title,
      }}
    />
  ));
  return (
    <div className={`${styles["container"]} ${props.className}`}>{render}</div>
  );
};

export default Jobs;
