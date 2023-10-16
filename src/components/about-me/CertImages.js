import { useContext, useState } from "react";

import styles from "./CertImages.module.css";

// COMPONENTS
import Modal from "../../UI/Modal";

// CONTEXT
import OverlayContext from "../../store/OverlayContext";

// IMAGE
import certLazy from "../../images/certs/cert-lazy.jpg";

const CertImages = (props) => {
  const [currImg, setCurrImg] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const overlayData = useContext(OverlayContext);

  const onClickHandler = (e) => {
    e.preventDefault();

    setCurrImg(e.target.id);
  };

  const renderButtons = overlayData.imgs.map((img, i) => {
    return (
      <button
        key={i}
        id={i}
        onClick={onClickHandler}
        className={styles.btn}
      >{`Cert ${i + 1}`}</button>
    );
  });

  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.btns}>{renderButtons}</div>
        <div className={styles["images"]}>
          {overlayData.imgs[currImg] && (
            <img
              alt={`Certificate - ${overlayData.imgs[0].split("/")[3]}`}
              className={styles["img"]}
              style={loaded ? { opacity: "1" } : { opacity: "0" }}
              onLoad={() => {
                setLoaded(true);
              }}
              src={overlayData.imgs[currImg]}
              loading="lazy"
            />
          )}
          <img
            alt={`Certificate blured`}
            className={styles["img-lazy"]}
            src={certLazy}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CertImages;
