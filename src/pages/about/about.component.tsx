import * as React from "react";
import * as styles from "./about.scss";
import { AboutProps } from "./about.props";
import { Link } from "react-scroll";
import { Card } from "src/components/card";

/**
 * About component
 */
const titles = ["Responsive", "Passion", "Design", "Support"];
const About: React.SFC<AboutProps> = ({ id }) => {
  return (
    <section className={styles.about} id={id}>
      <div className={styles.container}>
        <h3>ABOUT THE COMPANY</h3>
        <p>Key features of our company</p>
      </div>
      <div className={styles.cards}>
        {titles.map(value => {
          return (
            <Card title={value}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export { About };
