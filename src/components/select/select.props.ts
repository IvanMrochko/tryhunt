import { WithError } from "@models";
import { ChangeHandler, WithStyles } from "@shared";
import { ISelectScss } from "./select.scss";

type SelectProps<O = any> = WithStyles<ISelectScss> &
  WithError & {
    /**
     * Block classname
     */
    className?: string;
    /**
     * Control value
     */
    value?: any;
    /**
     * Get option value
     */
    getValue?: (option) => any;

    /**
     * Select option callback
     */
    onSelectOption?: (option) => any;
    /**
     * Get option name
     */
    getName?: (option) => any;
    /**
     * Control label
     */
    label?: any;
    /**
     * Control placeholder
     */
    placeholder?: string;
    /**
     * Is Multi select
     */
    isMulti?: boolean;
    /**
     * Options list
     */
    options?: O[];
    /**
     * Field name
     */
    name?: string;
    /**
     * Handler
     */
    onChange?: ChangeHandler;

    isDisabled?: boolean;
    /**
     * Background
     */
    background?: "white" | "grey";
  };

export { SelectProps };
