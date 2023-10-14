import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./HeaderLink.module.css";

const HeaderLink = (props) => {
  const navigate = useNavigate();

  const slug = props.title.toLowerCase().split(" ").join("-");

  const redirect = (e) => {
    e.preventDefault();

    let timeout;
    if (slug === "home") {
      props.data.setIsHome(true);
      timeout = setTimeout(() => {
        props.data.setPath(slug);
        navigate(`/${slug}`);
      }, 1000 * 1);
    } else {
      props.data.setPath(slug);
      navigate(`/${slug}`);
    }

    return () => clearTimeout(timeout);
  };

  const isActive = slug === props.data.path ? true : false;

  return (
    <Fragment>
      {!props.data.isHome && (
        <Link
          to={slug}
          onClick={redirect}
          className={`${styles.container} ${
            isActive ? styles.active : styles.inactive
          }`}
        >
          <p className={styles.text}>{props.title}</p>
        </Link>
      )}
      {props.data.isHome && (
        <Link
          to={slug}
          onClick={redirect}
          className={`${styles[`container-home`]} ${
            isActive ? styles["active-home"] : styles["inactive-home"]
          }`}
        >
          <p className={styles["text-home"]}>{props.title}</p>
        </Link>
      )}
    </Fragment>
  );
};

export default HeaderLink;
