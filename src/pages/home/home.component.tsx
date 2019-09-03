import * as React from "react";
import * as styles from "./home.scss";
import { HomeProps } from "./home.props";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faSnapchat
} from "@fortawesome/free-brands-svg-icons";

/**
 * Footer component
 */

const Home: React.SFC<HomeProps> = ({ id }) => {
  return (
    <section className={styles.home} id={id}>
      <div className={styles.container}>
        <span>Start something that matters</span>
        <span>
          Stop wasting valuable time with projects that just isn't you.
        </span>
        <span>
          <Link
            activeClass="active"
            key="about"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Learn more and start today
          </Link>
        </span>
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faFacebook} size="lg" />
        <FontAwesomeIcon icon={faInstagram} size="lg" />
        <FontAwesomeIcon icon={faTwitter} size="lg" />
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        <FontAwesomeIcon icon={faSnapchat} size="lg" />
      </div>
    </section>
  );
};

export { Home };
