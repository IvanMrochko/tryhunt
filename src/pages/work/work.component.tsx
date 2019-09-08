import * as React from "react";
import * as styles from "./work.scss";
import { WorkProps } from "./work.props";
const camera = require("../../assets/img/camera");
import { text } from "@shared";
import { ProgresLine } from "src/components/progresLine";
import Dialog from "@material-ui/core/Dialog";
/**
 * Work component
 */
const skillsList = ["Photography", "Web Design", "Photoshop"];

const Work: React.SFC<WorkProps> = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const [imgUrl, setUrl] = React.useState("");
  const handleClickOpen = e => {
    setUrl(e.target.src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                <div className={styles.imges} key={index2}>
                  <img
                    src={camera}
                    alt="photo"
                    key={index + "-" + index2}
                    onClick={e => handleClickOpen(e)}
                  />
                </div>
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
                key={value}
              />
            ))}
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <img src={imgUrl} alt="photo" />
      </Dialog>
    </section>
  );
};

export { Work };
