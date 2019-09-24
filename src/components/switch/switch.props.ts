import { WithError } from "@models";
import { Omit, WithStyles, ChangeHandler } from "@shared";
import { ISwitchScss } from "./switch.scss";

type SwitchProps = WithStyles<ISwitchScss> &
  WithError &
  Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
    /**
     * Control label
     */
    label?: any;
    /**
     * Field name
     */
    name?: string;
    /**
     * Field value
     */
    value?: boolean;
    /**
     * Handle on change
     */
    onChange?: ChangeHandler;
    /**
     * Disabled control
     */
    isDisabled?: boolean;
  };

export { SwitchProps };
