import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

import styles from "./ContactCard.module.css";

// DATA
import data from "../../data";

const ContactCard = (props) => {
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
    <div className={styles["card"]}>
      <div
        className={`${styles["card-header"]} ${
          styles[props.data.title.toLowerCase()]
        }`}
      >
        <h3 className={styles["card-title"]}>{props.data.title}</h3>
        <div className={styles["underline"]} />
        {props.data.email && (
          <AiOutlineMail className={`${styles["card-icon"]}`} />
        )}
        {props.data.phone && (
          <AiOutlinePhone className={`${styles["card-icon"]}`} />
        )}
        {props.data.address && (
          <MdOutlineLocationOn className={`${styles["card-icon"]}`} />
        )}
        {props.data.email && (
          <a href={`mailto:${email}`} className={styles["card-text"]}>
            {email}
          </a>
        )}
        {props.data.phone && (
          <a href={`tel:${trimmedPhone}`} className={styles["card-text"]}>
            {phone}
          </a>
        )}
        {props.data.address && (
          <p className={styles["card-text"]}>{props.data.address}</p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
