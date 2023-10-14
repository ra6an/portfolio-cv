import React from "react";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";

import styles from "./Footer.module.css";

// IMAGE
import img from "../../images/Rwhite.png";

// DATA
import data from "../../data";

// LINKS
import links from "../../links";

const Footer = (props) => {
  const curYear = new Date().getFullYear();
  const email = data.bio.email;
  const tel = data.bio.phone;
  const phone = `+387 (${tel.slice(1, 3)}) ${tel.slice(4, 7)} - ${tel.slice(
    8,
    11
  )}`;

  const trimmedPhone = phone
    .split(" ")
    .join("")
    .split("-")
    .join("")
    .split("(")
    .join("")
    .split(")")
    .join("");

  return (
    <div className={styles["container"]}>
      <div className={styles["footer-overlay"]} />
      <div className={styles["footer-content"]}>
        <div className={styles["footer-links"]}>
          <a
            href={links.facebook}
            target="_blank"
            rel="noreferrer"
            className={`${styles["footer-link"]} ${styles["facebook"]}`}
          >
            <BiLogoFacebookCircle className={styles["footer-links-icon"]} />
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className={`${styles["footer-link"]} ${styles["instagram"]}`}
          >
            <AiOutlineInstagram className={styles["footer-links-icon"]} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`${styles["footer-link"]} ${styles["linkedin"]}`}
          >
            <AiFillLinkedin className={styles["footer-links-icon"]} />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className={`${styles["footer-link"]} ${styles["github"]}`}
          >
            <AiFillGithub className={styles["footer-links-icon"]} />
          </a>
        </div>
        <div className={styles["footer-image--container"]}>
          <img alt="Raban logo" className={styles["footer-image"]} src={img} />
        </div>
        <div className={styles["footer-contact"]}>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={`tel:${trimmedPhone}`}>{phone}</a>
        </div>
      </div>
      <div className={styles["footer-rights"]}>
        <p
          className={styles["footer-rights--text"]}
        >{`© ${curYear}, ADNAN DACIĆ All rights reserved.`}</p>
      </div>
    </div>
  );
};

export default Footer;
