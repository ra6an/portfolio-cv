import { useState, useEffect } from "react";

import styles from "./Carousel.module.css";

// COMPONENTS
import Links from "./Links";
import Slider from "./Slider";

const Carousel = (props) => {
  const [content, setContent] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (content === 2) setContent(0);
      if (content !== 2) setContent(content + 1);
    }, 10 * 1000);
    return () => clearTimeout(timeout);
  }, [content]);

  return (
    <div
      className={`${styles.container} ${props.className}`}
      style={props.style}
    >
      <div className={styles["inner-container"]}>
        <Slider data={{ content: content, setContent: setContent }} />
        <Links />
      </div>
    </div>
  );
};

export default Carousel;
