import React from "react";

import styles from "./Contact.module.css";

// COMPONENTS
import ContactContainer from "../components/contact/ContactContainer";

const Contact = (props) => {
  return (
    <div className={styles["container"]}>
      <ContactContainer />
    </div>
  );
};

export default Contact;
