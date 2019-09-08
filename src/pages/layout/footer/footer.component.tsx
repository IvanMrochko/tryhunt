import * as React from "react";
import * as styles from "./footer.scss";
import { FooterProps } from "./footer.props";
import { Button } from "@components";
import { animateScroll as scroll } from "react-scroll";
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

const Footer: React.SFC<FooterProps> = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <footer className={styles.footer}>
      <Button type="button" theme="black" onClick={scrollToTop}>
        To the top
      </Button>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faFacebook} size="lg" />
        <FontAwesomeIcon icon={faInstagram} size="lg" />
        <FontAwesomeIcon icon={faTwitter} size="lg" />
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        <FontAwesomeIcon icon={faSnapchat} size="lg" />
      </div>
    </footer>
  );
};

export { Footer };
