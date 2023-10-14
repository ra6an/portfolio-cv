import React from "react";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";

import urls from "../../links";

import styles from "./Links.module.css";

const Links = (props) => {
  return (
    <div className={styles.container}>
      <a
        href={urls.instagram}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <AiOutlineInstagram className={styles.icon} />
      </a>
      <a
        href={urls.facebook}
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        <BiLogoFacebookCircle className={styles.icon} />
      </a>
      <a
        href={urls.linkedin}
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin className={styles.icon} />
      </a>
      <a
        href={urls.github}
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className={`${styles.icon} ${styles.github}`} />
      </a>
    </div>
  );
};

export default Links;
