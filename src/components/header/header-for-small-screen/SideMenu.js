import React from "react";

import styles from "./SideMenu.module.css";

// COMPONENTS
import HeaderLinkTandM from "./HeaderLinkTandM";

// OVERLAY
import Modal from "../../../UI/Modal";

const SideMenu = (props) => {
  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles["inner-container"]}>
          <HeaderLinkTandM
            title="HOME"
            data={{
              ...props.data,
            }}
          />
          <HeaderLinkTandM
            title="ABOUT ME"
            data={{
              ...props.data,
            }}
          />
          <HeaderLinkTandM title="PROJECTS" data={{ ...props.data }} />
          <HeaderLinkTandM
            title="CONTACT"
            data={{
              ...props.data,
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default SideMenu;
