import { useState, useEffect } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

import styles from "./ProgrammingContainer.module.css";

// COMPONENTS
import ProgProjectDetails from "./ProgProjectDetails";
import ProgImage from "./ProgImage";

const ProgrammingContainer = (props) => {
  const [curProject, setCurProject] = useState(0);
  const [init, setInit] = useState(0);
  const [projectHeight, setProjectHeight] = useState(null);
  const numberOfProjects = props.data.projects.length;

  useEffect(() => {
    if (init) {
      setInit(false);
    }

    if (!init) {
      setProjectHeight(document.getElementById("projects-slider").offsetHeight);
    }
  }, [init]);

  // DETECT AND HANDLE PROJECT HEIGHT CHANGE
  useEffect(() => {
    const handleResize = () => {
      setProjectHeight(document.getElementById("projects-slider").offsetHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const incrementHandler = (e) => {
    e.preventDefault();

    if (curProject === numberOfProjects - 1) {
      setCurProject(0);
    } else if (curProject > numberOfProjects - 1 || curProject < 0) {
      setCurProject(0);
    } else {
      setCurProject(curProject + 1);
    }
  };

  const decrementHandler = (e) => {
    e.preventDefault();

    if (curProject === 0) {
      setCurProject(numberOfProjects - 1);
    } else if (curProject > numberOfProjects - 1 || curProject < 0) {
      setCurProject(0);
    } else {
      setCurProject(curProject - 1);
    }
  };

  const renderProjects = props.data.projects.map((project) => {
    return (
      <div
        key={project.details.id}
        id={project.details.id}
        className={styles["single-project"]}
      >
        <ProgProjectDetails
          data={{
            details: project.details,
          }}
        />
        <ProgImage
          data={{
            img: project.details.img,
          }}
        />
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.filter}></div>
      </div>
      <div
        className={styles["inner-container"]}
        style={{ height: `${projectHeight}px` }}
      >
        <div
          id="projects-slider"
          className={styles["projects-slider"]}
          style={{
            transform: `translateX(-${(100 / numberOfProjects) * curProject}%)`,
            width: `${numberOfProjects * 100}%`,
          }}
        >
          {renderProjects}
        </div>
      </div>
      <div className={styles["projects-slider-btns"]}>
        <button
          className={`${styles["projects-slider-btn"]} ${styles["left"]}`}
          onClick={decrementHandler}
        >
          <MdArrowBackIosNew className={styles["projects-btn"]} />
        </button>
        <button
          className={`${styles["projects-slider-btn"]} ${styles["right"]}`}
          onClick={incrementHandler}
        >
          <MdArrowForwardIos className={styles["projects-btn"]} />
        </button>
      </div>
    </div>
  );
};

export default ProgrammingContainer;
