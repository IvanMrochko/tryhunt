import * as React from "react";
import * as styles from "./progresLine.scss";
import { ProgresLinerops } from "./progresLine";
import * as classNames from "classnames";
import { capitalize } from "@shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBtc } from "@fortawesome/free-brands-svg-icons";

/**
 * Progres Line component
 */
const ProgresLine: React.SFC<ProgresLinerops> = ({ value, title }) => {
  return (
    <div>
      <p className={styles.title}>
        <FontAwesomeIcon icon={faBtc} />
        {title}
      </p>
      <div className={styles.line}>
        <div style={{ width: `${value}%` }}>{value}%</div>
      </div>
    </div>
  );
};

/**`
 * Defaults
 */

export { ProgresLine };
