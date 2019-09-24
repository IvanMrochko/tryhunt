import { WithError } from "@models";
import { ChangeHandler, WithStyles } from "@shared";
import { IMultiInputScss } from "./multi-input.scss";

type MultiInputProps = WithStyles<IMultiInputScss> &
  WithError & {
    /**
     * Chars and validations list
     */
    chars: (RegExp | string)[];
    /**
     * Text field value
     */
    value?: number | string;
    /**
     * Field name
     */
    name?: string;
    /**
     * Field label
     */
    label?: string;
    /**
     * Is field disabled
     */
    isDisabled?: boolean;
    /**
     * Change handler
     */
    onChange?: ChangeHandler<string>;
  };

export { MultiInputProps };

