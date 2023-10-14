import React from "react";

import styles from "./Timeline.module.css";
import SingleTimeline from "./SingleTimeline";

const Timeline = (props) => {
  const dummy = [...props.data.list];

  const functionForSorting = () => {
    let list = [];
    let helper = 0;
    let keyHelper = 0;

    for (let n = 0; n !== dummy.length - 0; n++) {
      if (n === 0) {
        list.push(
          {
            title: dummy[n].title,
            color: dummy[n].color,
            cert: dummy[n].cert,
            position: "first",
            id: keyHelper,
          },
          {
            title: null,
            cert: null,
            position: null,
            id: keyHelper + 1,
          },
          {
            title: null,
            cert: null,
            position: null,
            id: keyHelper + 2,
          }
        );
        keyHelper += 3;
      }

      if (n === dummy.length - 1) {
        list.push({
          title: dummy[n].title,
          color: dummy[n].color,
          cert: dummy[n].cert,
          position: helper === 2 ? "last-left" : "last-right",
          id: keyHelper,
        });
      }

      if (!(n % 2) && n !== 0 && n !== dummy.length - 1) {
        list.push(
          {
            title: dummy[n].title,
            color: dummy[n].color,
            cert: dummy[n].cert,
            position: "left",
            id: keyHelper,
          },
          {
            title: null,
            cert: null,
            position: null,
            id: keyHelper + 1,
          },
          {
            title: null,
            cert: null,
            position: null,
            id: keyHelper + 2,
          }
        );
        keyHelper += 3;
        helper = 1;
      }

      if (n % 2 && n !== 0 && n < dummy.length - 1) {
        list.push({
          title: dummy[n].title,
          color: dummy[n].color,
          cert: dummy[n].cert,
          position: "right",
          id: keyHelper,
        });
        keyHelper++;
        helper = 2;
      }
    }

    return list;
  };

  const sortedList = functionForSorting();

  const render = sortedList.map((x) => (
    <SingleTimeline data={x} title={props.data.title} key={x.id} />
  ));

  return <div className={styles["programs"]}>{render}</div>;
};

export default Timeline;
