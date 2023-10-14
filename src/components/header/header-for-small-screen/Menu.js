import { useContext } from "react";
import { BiMenu } from "react-icons/bi";

import styles from "./Menu.module.css";

// CONTEXT
import OverlayContext from "../../../store/OverlayContext";

const Menu = (props) => {
  const ctx = useContext(OverlayContext);

  const onClickHandler = (e) => {
    e.preventDefault();

    ctx.setSideBar(true);
  };

  return (
    <div className={styles.container} onClick={onClickHandler}>
      <BiMenu className={styles["menu-icon"]} />
    </div>
  );
};

export default Menu;
