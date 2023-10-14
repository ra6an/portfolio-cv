import React from "react";

import styles from "./Projects.module.css";

// COMPONENTS
import ProjectsContainer from "../components/projects/ProjectsContainer";

const Projects = (props) => {
  return (
    <div className={styles.container}>
      <div className={`${styles["scrollable-container"]}`}>
        <ProjectsContainer scrWidth={props.scrWidth} />
      </div>
    </div>
  );
};

export default Projects;
