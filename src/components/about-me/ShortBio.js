import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

import styles from "./ShortBio.module.css";

// COMPONENTS
import MyDetails from "./MyDetails";
import HobbieContainer from "./HobbieContainer";

// IMAGES
import quoteImg from "../../images/quote-grey.png";

// DATA
import data from "../../data";

const ShortBio = (props) => {
  const [currHobbie, setCurrHobbie] = useState(0);
  const numOfHobbies = data.hobbies.length;

  const onClickNext = (e) => {
    e.preventDefault();

    if (currHobbie < numOfHobbies - 1) {
      setCurrHobbie(currHobbie + 1);
    } else if (currHobbie === numOfHobbies - 1) {
      setCurrHobbie(0);
    } else if (currHobbie > numOfHobbies - 1 || currHobbie < 0) {
      setCurrHobbie(0);
    }
  };

  const onClickPreviev = (e) => {
    e.preventDefault();

    if (currHobbie === 0) {
      setCurrHobbie(numOfHobbies - 1);
    } else if (0 < currHobbie && currHobbie <= numOfHobbies - 1) {
      setCurrHobbie(currHobbie - 1);
    } else if (currHobbie > numOfHobbies - 1 || currHobbie < 0) {
      setCurrHobbie(numOfHobbies - 1);
    }
  };

  return (
    <div className={styles["container"]}>
      <MyDetails />
      <div className={styles["right-side"]}>
        <div className={styles["bio-text"]}>
          <h3 className={styles["bio-title"]}>-Hello-</h3>
          <img
            alt="quote character"
            src={quoteImg}
            className={styles["image-quote"]}
          />
          <p className={styles["bio-quote"]}>{data.aboutMeQoute.main}</p>
        </div>
        <h3 className={styles["bio-title"]}>-Hobbies-</h3>
        <div className={styles["hobbies"]}>
          <HobbieContainer hobbies={data.hobbies} currHobbie={currHobbie} />
        </div>
        <div className={styles["hobbies-btns"]}>
          <button className={styles["hobbies-btn"]} onClick={onClickPreviev}>
            <MdArrowBackIosNew className={styles["hobbies-icon"]} />
          </button>
          <button className={styles["hobbies-btn"]} onClick={onClickNext}>
            <MdArrowForwardIos className={styles["hobbies-icon"]} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortBio;
