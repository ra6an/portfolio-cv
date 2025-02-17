import React from "react";
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoSpringBoot,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

import styles from "./Technology.module.css";

const Technology = (props) => {
  return (
    <div className={props.className}>
      <div className={styles["left"]}></div>
      <div className={styles["technology-body"]}>
        <div className={styles["technology-body--top"]}>
          <div className={styles["single-tech-left"]}>
            <BiLogoReact
              className={`${styles["icon"]} ${styles["react-icon"]}`}
            />
            <p className={styles["technology-title"]}>React</p>
          </div>
          <div className={styles["single-tech-right"]}>
            <BiLogoNodejs
              className={`${styles["icon"]} ${styles["nodejs-icon"]}`}
            />
            <p className={styles["technology-title"]}>NodeJS</p>
          </div>
        </div>
        <div className={styles["technology-body--middle"]}></div>
        <div className={styles["technology-body--bottom"]}>
          <div className={styles["single-tech-left"]}>
            <FaJava className={`${styles["icon"]} ${styles["java-icon"]}`} />
            <p className={styles["technology-title"]}>Java</p>
          </div>
          <div className={styles["single-tech-right"]}>
            <TbBrandCSharp
              className={`${styles["icon"]} ${styles["csharp-icon"]}`}
            />
            <p className={styles["technology-title"]}>C#</p>
          </div>
          {/* <div className={styles["single-tech-left"]}>
            <BiLogoMongodb
              className={`${styles["icon"]} ${styles["mongodb-icon"]}`}
            />
            <p className={styles["technology-title"]}>Mongo</p>
          </div>
          <div className={styles["single-tech-right"]}>
            <DiMysql className={`${styles["icon"]} ${styles["mysql-icon"]}`} />
            <p className={styles["technology-title"]}>MySQL</p>
          </div> */}
        </div>
      </div>
      <div className={styles["right"]}></div>
    </div>
  );
};

export default Technology;
