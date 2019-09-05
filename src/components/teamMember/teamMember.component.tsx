import * as React from "react";
import * as styles from "./teamMember.scss";
import { TeamMemberProps } from "./teamMember";
import * as classNames from "classnames";
import { capitalize } from "@shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../button";
const photo = require("../../assets/img/team.jpg");
/**
 * TeamMember component
 */
const TeamMember: React.SFC<TeamMemberProps> = ({ children, title }) => {
  return (
    <div className={styles.teamMember}>
      <img src={photo} alt="card" />
      <div className={styles.cardText}>
        {" "}
        <h3>{title}</h3>
        <p className={styles.transparent}>CEO and Founder</p>
        <p className={styles.text}>{children}</p>
        <Button theme="primary">Contact</Button>
      </div>
    </div>
  );
};

/**`
 * Defaults
 */

export { TeamMember };
