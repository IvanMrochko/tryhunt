import * as React from "react";
import * as styles from "./work.scss";
import { WorkProps } from "./work.props";
const camera = require("../../assets/img/camera");
import { text } from "@shared";
import { ProgresLine } from "src/components/progresLine";
/**
 * Work component
 */
const skillsList = ["Photography", "Web Design", "Photoshop"];

const Work: React.SFC<WorkProps> = ({ id }) => {
  let emptyArray = Array(4).fill(0);
  return (
    <section className={styles.work} id={id}>
      <div className={styles.container}>
        <h3>OUR WORK</h3>
        <p>What we've done for people</p>
        {[0, 0].map((value, index) => {
          return (
            <div className={styles.list} key={index}>
              {emptyArray.map((value2, index2) => (
                <img src={camera} alt="photo" key={index + "-" + index2} />
              ))}
            </div>
          );
        })}
      </div>
      <div className={styles.skills}>
        <div className={styles.containerSkills}>
          <div>
            <h3>Our Skills.</h3>
            <p>{text}</p>
            <p>{text}</p>
          </div>
          <div>
            {skillsList.map(value => (
              <ProgresLine
                title={value}
                value={Math.floor(Math.random() * 100) + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Work };
