import * as React from "react";
import * as styles from "./button.scss";
import { ButtonProps } from "./button.props";
import * as classNames from "classnames";
import { capitalize } from "@shared";

/**
 * Button component
 */
const Button: React.SFC<ButtonProps> = ({
  children,
  theme,
  isDisabled,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        className,
        styles.button,
        styles["button" + capitalize(theme)],
        {
          [styles.buttonDisabled]: isDisabled
        },
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

/**`
 * Defaults
 */
Button.defaultProps = {
  theme: "primary",
  type: "button"
};

export { Button };
