import { useState, useContext, useEffect } from "react";

import styles from "./ProjectsContainer.module.css";

// COMPONENTS
import ProgrammingContainer from "./ProgrammingContainer";
import ArchitectureContainer from "./ArchitectureContainer";

// STORE
import OverlayContext from "../../store/OverlayContext";

// DATA
import data from "../../data";

const ProjectsContainer = (props) => {
  const [hovered, setHovered] = useState(false);
  const [currentBtn, setCurrentBtn] = useState("architecture");
  const ctx = useContext(OverlayContext);

  useEffect(() => {
    setCurrentBtn(
      ctx.currentProjects === "architecture" ? "programming" : "architecture"
    );
  }, [ctx.currentProjects]);

  const onHover = (e) => {
    e.preventDefault();
    setHovered(true);
  };

  const offHover = (e) => {
    e.preventDefault();
    setHovered(false);
  };

  const switchContentHandler = (e) => {
    e.preventDefault();

    if (ctx.currentProjects === "architecture") {
      ctx.setCurProj("programming");
    } else {
      ctx.setCurProj("architecture");
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles["projects-btns"]}
        onMouseEnter={onHover}
        onMouseLeave={offHover}
      >
        <div className={styles["projects-btns--inner"]}>
          <button
            onClick={switchContentHandler}
            className={styles["projects-btn"]}
            style={hovered ? { color: "#fff" } : { color: "#333" }}
          >
            {props.scrWidth <= 1200
              ? `${
                  currentBtn.slice(0, 1).toUpperCase() +
                  currentBtn.slice(1, currentBtn.length)
                } projects`
              : `Check out my ${currentBtn} projects`}
          </button>
          <div
            className={styles[`btn-backgrount`]}
            style={
              hovered
                ? { transform: "translateX(0%)" }
                : { transform: "translateX(-110%)" }
            }
          />
        </div>
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["inner-container"]}>
          {ctx.currentProjects === "programming" && (
            <ProgrammingContainer
              data={{ projects: data.programmingProjects }}
            />
          )}
          {ctx.currentProjects === "architecture" && (
            <ArchitectureContainer
              data={{ projects: data.architectureProjects }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
