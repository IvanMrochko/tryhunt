import { HTMLAttributes, ReactNode } from "react";
/**
 * Button props
 */
type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  /**
   * Children
   */
  children: ReactNode;
  /**
   * Button theme
   */
  theme?:
    | "primary"
    | "secondary"
    | "error"
    | "transparent"
    | "timer"
    | "cancel";
  /**
   * Button type
   */
  type?: "button" | "submit";
  /**
   * Is button disabled
   */
  isDisabled?: boolean;
};

export { ButtonProps };
