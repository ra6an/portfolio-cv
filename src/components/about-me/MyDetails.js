import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { MdOutlineLocationOn, MdOutlinePsychology } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";

import styles from "./MyDetails.module.css";

// IMAGE
import img from "../../images/ad2.png";

// DATA
import data from "../../data";

const MyDetails = (props) => {
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
      <div className={styles["background-behind"]} />
      <div className={styles["background-main"]} />
      <img
        src={img}
        className={styles["image"]}
        alt="Selfie of Adnan Dacić"
        loading="lazy"
      />
      <ul className={styles["details"]}>
        <li className={styles["single-detail"]}>
          <AiOutlineCalendar className={styles["icon"]} />
          <p className={styles["text"]}>{data.bio.birthday}</p>
        </li>
        <li className={styles["single-detail"]}>
          <MdOutlineLocationOn className={styles["icon"]} />
          <a
            href="https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina"
            className={styles["text"]}
            target="_blank"
            rel="noreferrer"
          >
            {data.bio.location}
          </a>
        </li>
        <li className={styles["single-detail"]}>
          <IoSchoolOutline className={styles["icon"]} />
          <a
            href="https://www.ggs.edu.ba/"
            className={styles["text"]}
            target="_blank"
            rel="noreferrer"
          >
            {data.bio.school}
          </a>
        </li>
        <li className={styles["single-detail"]}>
          <MdOutlinePsychology className={styles["icon"]} />
          <a
            href="https://www.16personalities.com/intp-personality"
            className={styles["text"]}
            target="_blank"
            rel="noreferrer"
          >
            {data.bio.mbti}
          </a>
        </li>
        <li className={styles["single-detail"]}>
          <AiOutlineMail className={styles["icon"]} />
          <a href={`mailto:${email}`} className={styles["text"]}>
            {email}
          </a>
        </li>
        <li className={styles["single-detail"]}>
          <AiOutlinePhone className={styles["icon"]} />
          <a href={`tel:${trimmedPhone}`} className={styles["text"]}>
            {phone}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MyDetails;
