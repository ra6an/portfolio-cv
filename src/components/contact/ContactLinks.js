import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import styles from "./ContactLinks.module.css";

const ContactLinks = (props) => {
  return (
    <a className={styles["contact-links"]} href={props.data.url}>
      {props.data.icon === "instagram" && (
        <AiOutlineInstagram
          className={`${styles["link-icon"]} ${styles["instagram"]}`}
        />
      )}
      {props.data.icon === "facebook" && (
        <BiLogoFacebookCircle
          className={`${styles["link-icon"]} ${styles["facebook"]}`}
        />
      )}
      {props.data.icon === "linkedin" && (
        <AiFillLinkedin
          className={`${styles["link-icon"]} ${styles["linkedin"]}`}
        />
      )}
      {props.data.icon === "github" && (
        <AiFillGithub
          className={`${styles["link-icon"]} ${styles["github"]}`}
        />
      )}
    </a>
  );
};

export default ContactLinks;
