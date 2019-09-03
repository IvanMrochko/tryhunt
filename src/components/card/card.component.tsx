import * as React from "react";
import * as styles from "./card.scss";
import { CardProps } from "./card";
import * as classNames from "classnames";
import { capitalize } from "@shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

/**
 * Card component
 */
const Card: React.SFC<CardProps> = ({ children, title }) => {
  return (
    <div>
      <p>
        <FontAwesomeIcon icon={faApple} size="5x" />
      </p>
      <p>{title}</p>
      <p className={styles.text}>{children}</p>
    </div>
  );
};

/**`
 * Defaults
 */

export { Card };
