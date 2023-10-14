import React from "react";

import styles from "./ContactContainer.module.css";

// COMPONENTS
import ContactCard from "./ContactCard";
import Footer from "../footer/Footer";

// DATA
import data from "../../data";

const ContactContainer = (props) => {
  const email = data.bio.email;
  const tel = data.bio.phone;
  const phone = `+387 (${tel.slice(1, 3)}) ${tel.slice(4, 7)} - ${tel.slice(
    8,
    11
  )}`;

  const trimmedPhone = phone
    .split(" ")
    .join("")
    .split("-")
    .join("")
    .split("(")
    .join("")
    .split(")")
    .join("");
  return (
    <div className={styles["container"]}>
      <div className={styles["container-overflow"]}>
        <div className={styles["container-body"]}>
          <h2 className={styles["header"]}>-Contact Me-</h2>
          <div className={styles["quote-icon"]} />
          <p className={styles["text"]}>{data.contactQuote[0]}</p>
          <div className={styles["contact-content"]}>
            <ContactCard
              data={{
                title: "Phone",
                phoneLink: { trimmedPhone },
                phone: { phone },
              }}
            />
            <ContactCard
              data={{
                title: "E-mail",
                emailLink: { email },
                email: { email },
              }}
            />
            <ContactCard
              data={{
                title: "Address",
                address: "Bosnia and Herzegovina, Sarajevo 71000",
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactContainer;
