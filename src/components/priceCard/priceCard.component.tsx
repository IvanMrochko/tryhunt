import * as React from "react";
import * as styles from "./priceCard.scss";
import { PriceCardProps } from "./priceCard";
import * as classNames from "classnames";
import { capitalize } from "@shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../button";
const photo = require("../../assets/img/team.jpg");
/**
 * PriceCard component
 */
const PriceCard: React.SFC<PriceCardProps> = ({ value, title, pro }) => {
  return (
    <div className={styles.card}>
      <ul
        className={classNames(styles.listUl, {
          [styles.pro]: pro
        })}
      >
        <li>{title}</li>
        <li>{value}GB Storage</li>
        <li>{value} Emails</li>
        <li>{value} Domains</li>
        <li>Endless support</li>
        <li>
          <h2>$ {value}</h2>
          <span>per month</span>
        </li>
        <li>
          {" "}
          <Button theme="black">Sign Up</Button>
        </li>
      </ul>
    </div>
  );
};

/**`
 * Defaults
 */
PriceCard.defaultProps = {
  pro: false
};
export { PriceCard };
