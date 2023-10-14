import React from "react";

import styles from "./Header.module.css";

// COMPONENTS
import HeaderLink from "./HeaderLink";
import Logo from "./Logo";

const Header = (props) => {
  return (
    <div className={props.class} style={props.style}>
      <div
        className={
          props.data.isHome
            ? `${styles.container}`
            : `${styles["container-with-bg"]}`
        }
      >
        <div
          className={`${styles.sides}`}
          style={
            props.data.isHome
              ? { backgroundColor: "var(--white)" }
              : { backgroundColor: "var(--transparent)" }
          }
        />
        <HeaderLink
          title="HOME"
          data={{
            ...props.data,
          }}
        />
        <HeaderLink
          title="ABOUT ME"
          data={{
            ...props.data,
          }}
        />
        <div
          className={styles.middle}
          style={
            props.data.isHome
              ? { backgroundColor: "var(--white)" }
              : { backgroundColor: "var(--transparent)" }
          }
        />
        <Logo data={{ isHome: props.data.isHome }} />
        <div
          className={styles.middle}
          style={
            props.data.isHome
              ? { backgroundColor: "var(--white)" }
              : { backgroundColor: "var(--transparent)" }
          }
        />
        <HeaderLink title="PROJECTS" data={{ ...props.data }} />
        <HeaderLink
          title="CONTACT"
          data={{
            ...props.data,
          }}
        />
        <div
          className={styles.sides}
          style={
            props.data.isHome
              ? { backgroundColor: "var(--white)" }
              : { backgroundColor: "var(--transparent)" }
          }
        />
      </div>
    </div>
  );
};

export default Header;
