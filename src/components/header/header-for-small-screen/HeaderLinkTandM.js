import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./HeaderLinkTandM.module.css";

// CONTEXT
import OverlayContext from "../../../store/OverlayContext";

const HeaderLinkTandM = (props) => {
  const navigate = useNavigate();
  const ctx = useContext(OverlayContext);

  const slug = props.title.toLowerCase().split(" ").join("-");

  const redirect = (e) => {
    e.preventDefault();

    let timeout;
    if (slug === "home") {
      props.data.setIsHome(true);
      timeout = setTimeout(() => {
        props.data.setPath(slug);
        navigate(`/${slug}`);
      }, 1000 * 1);
    } else {
      props.data.setPath(slug);
      navigate(`/${slug}`);
    }

    ctx.setSideBar(false);

    return () => clearTimeout(timeout);
  };

  return (
    <div className={styles.container}>
      <Link to={`/${slug}`} onClick={redirect} className={styles.link}>
        {props.title}
      </Link>
    </div>
  );
};

export default HeaderLinkTandM;
