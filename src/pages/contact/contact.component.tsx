import * as React from "react";
import * as styles from "./contact.scss";
import { ContactProps } from "./contact.props";
const camera = require("../../assets/img/camera");
import { text } from "@shared";
import { ProgresLine } from "src/components/progresLine";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@components";
const map = require("../../assets/img/map.jpg");
/**
 * Contact component
 */

const dataList = ["Chicago, US", " Phone: +00 151515", " Email: mail@mail.com"];
const Contact: React.SFC<ContactProps> = ({ id }) => {
  const submit = e => {
    alert("You sent message successfully");
  };
  return (
    <section className={styles.contact} id={id}>
      <div className={styles.container}>
        <h3>CONTACT</h3>
        <p>Lets get in touch. Send us a message:</p>
        <div className={styles.list}>
          {dataList.map(value => (
            <p key={value}>
              <FontAwesomeIcon icon={faAmazon} size="2x" />
              {value}
            </p>
          ))}
        </div>
        <form onSubmit={submit}>
          <p>
            <input type="text" name="name" placeholder="Name" required />
          </p>
          <p>
            <input type="email" name="email" placeholder="Email" required />
          </p>
          <p>
            <input type="text" name="subject" placeholder="Subject" required />
          </p>
          <p>
            <input type="text" name="message" placeholder="Message" required />
          </p>
          <Button theme="black" type="submit">
            SEND MESSAGE
          </Button>
        </form>
        <div>
          <img src={map} alt="map" />
        </div>
      </div>
    </section>
  );
};

export { Contact };
