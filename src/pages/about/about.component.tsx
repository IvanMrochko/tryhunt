import * as React from "react";
import * as styles from "./about.scss";
import { AboutProps } from "./about.props";
import { Link } from "react-scroll";
import { Card } from "src/components/card";

/**
 * About component
 */
const titles = ["Responsive", "Passion", "Design", "Support"];
const text =
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedon eiusmod tempor incididunt ut labore et dolore.";
const About: React.SFC<AboutProps> = ({ id }) => {
  return (
    <>
      <section className={styles.about} id={id}>
        <div>
          <div className={styles.container}>
            <h3>ABOUT THE COMPANY</h3>
            <p>Key features of our company</p>
          </div>
          <div className={styles.cards}>
            {titles.map(value => {
              return (
                <Card title={value} key={value}>
                  {text}
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <div className={styles.promo}>
        <div>
          <h3>We know design.</h3>
          <p>{text}</p>
          <Link
            activeClass="active"
            key="team"
            to="team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            View Our Works
          </Link>
        </div>
        <div></div>
      </div>
    </>
  );
};

export { About };
