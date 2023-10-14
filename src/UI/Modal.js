import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

// CONTEXT
import OverlayContext from "../store/OverlayContext";

const Backdrop = (props) => {
  const contextData = useContext(OverlayContext);

  const onClickHandler = (e) => {
    e.preventDefault();

    contextData.setInactive();
    contextData.setImgs([]);
    contextData.setSideBar(false);
  };

  return <div onClick={onClickHandler} className={`${styles.backdrop}`}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={`${styles.modal}`}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </Fragment>
  );
};

export default Modal;
