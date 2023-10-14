import { Fragment, useState, useContext } from "react";

import styles from "./SingleTimeline.module.css";

// CONTEXT
import OverlayContext from "../../store/OverlayContext";

const SingleTimeline = (props) => {
  const [hovered, setHovered] = useState(false);
  const overlay = useContext(OverlayContext);

  const data = props.data;

  const onHoverEnterHandler = (e) => {
    e.preventDefault();

    setHovered(true);
  };

  const onHoverLeaveHandler = (e) => {
    e.preventDefault();

    setHovered(false);
  };

  const onClickHandler = (e) => {
    e.preventDefault();

    overlay.setImgs(data.cert);
    overlay.setActive(true);
  };

  return (
    <button
      className={`${styles["program-name-container"]}`}
      key={data.id}
      id={data.id}
      onClick={data.cert ? onClickHandler : () => {}}
      onMouseEnter={onHoverEnterHandler}
      onMouseLeave={onHoverLeaveHandler}
      style={data.position !== null ? { cursor: "pointer" } : {}}
    >
      {data.position !== null && (
        <div
          style={{ backgroundColor: `var(--${data.color})` }}
          className={`${
            data.position.includes("left") || data.position.includes("first")
              ? styles["background-hover-left"]
              : styles["background-hover-right"]
          } ${hovered ? styles["active"] : styles["inactive"]}`}
        />
      )}
      {data.position === "first" && (
        <Fragment>
          <div
            className={styles["dot-right"]}
            style={hovered ? { width: "2rem" } : {}}
          />
          <div
            className={`${styles["vertical-line-first"]} ${
              styles[props.title]
            }`}
          />
          <p>{data.title}</p>
        </Fragment>
      )}
      {data.position === null && <p key={data.id} />}
      {data.position === "left" && (
        <Fragment>
          <div
            className={styles["dot-right"]}
            style={hovered ? { width: "2rem" } : {}}
          />
          <div
            className={`${styles["vertical-line-right"]} ${
              styles[props.title]
            }`}
          />
          <p>{data.title}</p>
        </Fragment>
      )}
      {data.position === "right" && (
        <Fragment>
          <div
            className={styles["dot-left"]}
            style={hovered ? { width: "2rem" } : {}}
          />
          <div
            className={`${styles["vertical-line-left"]} ${styles[props.title]}`}
          />
          <p>{data.title}</p>
        </Fragment>
      )}
      {data.position !== null && data.position.includes("last") && (
        <Fragment>
          <div
            className={
              data.position === "last-left"
                ? styles["dot-right"]
                : styles["dot-left"]
            }
            style={hovered ? { width: "2rem" } : {}}
          />
          <div
            className={`${styles["vertical-line-last"]} ${styles[props.title]}`}
            style={
              data.position === "last-left"
                ? {
                    right: "0",
                    transform: "translate(50%, -50%)",
                    height: "50%",
                  }
                : {
                    left: "0",
                    transform: "translate(-50%, -50%)",
                    height: "50%",
                  }
            }
          />
          <p>{data.title}</p>
        </Fragment>
      )}
    </button>
  );
};

export default SingleTimeline;
