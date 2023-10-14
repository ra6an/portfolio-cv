import React from "react";

import styles from "./Contact.module.css";

// DATA
import data from "../../data";

const Contact = (props) => {
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
    <div className={props.className}>
      <div className={styles["left"]}></div>
      <div className={styles["contact-body"]}>
        <div className={styles["email"]}>
          <a href={`mailto:${email}`} className={styles["contact-text"]}>
            {email}
          </a>
        </div>
        <div className={styles["contact-middle"]}>
          <p className={styles["contact-middle--text"]}>OR</p>
        </div>
        <div className={styles["phone"]}>
          <a
            href={trimmedPhone}
            className={styles["contact-text"]}
          >{`${phone}`}</a>
        </div>
      </div>
      <div className={styles["right"]}></div>
    </div>
  );
};

export default Contact;
