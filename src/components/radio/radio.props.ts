import { WithError } from "@models";
import { Omit, WithStyles, ChangeHandler } from "@shared";
import { IRadioScss } from "./radio.scss";

type RadioProps = WithStyles<IRadioScss> &
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
     * Field group value
     */
    value?: any;
    /**
     * Value which will be emited
     */
    payload?: any;
    /**
     * Is field disabled
     */
    isDisabled? :boolean;
    /**
     * Handle on change
     */
    onChange?: ChangeHandler<any>;
  };

export { RadioProps };
