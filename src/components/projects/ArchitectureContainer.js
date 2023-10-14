import { useState, useEffect } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

import styles from "./ArchitectureContainer.module.css";

// COMPONENTS
import ArchProjCard from "./ArchProjCard";

const ArchitectureContainer = (props) => {
  const [curProject, setCurProject] = useState(0);
  const [init, setInit] = useState(0);
  const [projectHeight, setProjectHeight] = useState(null);
  const numOfProjects = props.data.projects.length;

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

    if (curProject === numOfProjects - 1) {
      setCurProject(0);
    } else if (curProject > numOfProjects - 1 || curProject < 0) {
      setCurProject(0);
    } else {
      setCurProject(curProject + 1);
    }
  };

  const decrementHandler = (e) => {
    e.preventDefault();

    if (curProject === 0) {
      setCurProject(numOfProjects - 1);
    } else if (curProject > numOfProjects - 1 || curProject < 0) {
      setCurProject(0);
    } else {
      setCurProject(curProject - 1);
    }
  };

  const render = props.data.projects.map((proj) => (
    <ArchProjCard
      numOfProjects={numOfProjects}
      key={proj.details.id}
      data={proj}
    />
  ));

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
            width: `${100 * numOfProjects}%`,
            transform: `translateX(-${(100 / numOfProjects) * curProject}%)`,
          }}
        >
          {render}
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

export default ArchitectureContainer;
