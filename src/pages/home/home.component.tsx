import * as React from "react";
import * as styles from "./home.scss";
import { HomeProps } from "./home.props";
/**
 * Footer component
 */

const Home: React.SFC<HomeProps> = () => {
  return <section className={styles.home}>home</section>;
};

export { Home };
