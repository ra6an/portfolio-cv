import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./DetailsCard.module.css";

// CONTEXT
import OverlayContext from "../../store/OverlayContext";

// COMPONENTS
import Timeline from "./Timeline";
import Jobs from "./Jobs";

const DetailsCard = (props) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const ctx = useContext(OverlayContext);

  const onMouseEnterHandler = (e) => {
    e.preventDefault();

    setHovered(true);
  };

  const onMouseLeaveHandler = (e) => {
    e.preventDefault();

    setHovered(false);
  };

  const setCurrentProjectHandler = (e) => {
    e.preventDefault();

    ctx.setCurProj(props.data.title);
    props.data.setPath("projects");
    navigate("/projects");
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["details-card"]}>
        <h3 className={styles["title"]}>-Technology-</h3>
        <Timeline
          data={{
            list: props.data.tech,
            title: props.data.title,
          }}
        />
        <h3 className={`${styles["title"]} ${styles["experiance"]}`}>
          -Experience-
        </h3>
        <Jobs
          className={styles["jobs"]}
          data={{ list: props.data.jobs, title: props.data.title }}
        />
        <div
          className={styles["btn-container"]}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <div
            className={`${styles["btn-background"]} ${
              styles[props.data.title]
            }`}
            style={
              hovered
                ? { transform: "translateX(0%)" }
                : { transform: "translateX(-110%)" }
            }
          />
          <div
            onClick={setCurrentProjectHandler}
            className={styles["redirect-btn"]}
            style={{ borderColor: `var(--${props.data.title})` }}
          >
            <p
              style={
                props.data.title === "programming" ? { color: "black" } : {}
              }
              className={`${styles["text"]} ${
                hovered ? styles.hovered : styles.left
              }`}
            >
              check out my projects...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
