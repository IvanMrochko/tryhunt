import { Omit, WithStyles, ChangeHandler } from "@shared";
import { WithError } from "@models";
import { ICheckboxScss } from "./checkbox.scss";

type CheckboxProps = WithStyles<ICheckboxScss> &
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
    isDisabled?: boolean;
    /**
     * Handle on change
     */
    onChange?: ChangeHandler;
  };

export { CheckboxProps };
