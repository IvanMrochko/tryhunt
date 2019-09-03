import * as React from "react";
import * as styles from "./footer.scss";
import { FooterProps } from "./footer.props";

/**
 * Footer component
 */

const Footer: React.SFC<FooterProps> = () => {
  return <footer className={styles.footer}>footer</footer>;
};

export { Footer };
