import { useContext } from "react";

import styles from "./HeaderTandM.module.css";

// COMPONENTS
import Menu from "./Menu";
import Logo from "./Logo";
import SideMenu from "./SideMenu";

// CONTEXT
import OverlayContext from "../../../store/OverlayContext";

const HeaderTandM = (props) => {
  const ctx = useContext(OverlayContext);

  return (
    <div className={`${props.class}`} style={props.style}>
      <div
        className={`${styles["container"]}`}
        style={
          props.data.isHome
            ? { backgroundColor: "var(--white)", backgroundImage: "none" }
            : { backgroundColor: "var(--transparent)" }
        }
      >
        <Logo data={{ isHome: props.data.isHome }} />
        {ctx.sideBar && <SideMenu data={props.data} />}
        <Menu />
      </div>
    </div>
  );
};

export default HeaderTandM;
