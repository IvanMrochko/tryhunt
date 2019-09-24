import * as React from "react";
import { CardProps } from "./card.props";
import * as classNames from "classnames";

const Card = React.memo(
  ({ styles, children, className, ...props }: CardProps) => (
    /**
     * Renders Card
     */
    <div className={classNames(styles.card, className)} {...props}>
      {children}
    </div>
  )
);

export { Card };
