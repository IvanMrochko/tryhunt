import { Omit, ChangeHandler, WithStyles } from "@shared";
import { WithError } from "@models";
import { ITextFieldScss } from "./text-field.scss";

type TextFieldProps = WithStyles<ITextFieldScss> &
  WithError &
  Omit<React.InputHTMLAttributes<HTMLDivElement>, "onChange"> & {
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
     * Is Field required?
     */
    isRequired?: boolean;
    /**
     * Mask pattern
     */
    mask?: string;
    /**
     * Change handler
     */
    onChange?: ChangeHandler<string>;
    /**
     * Helper text
     */
    helperText?: string;
  };

export { TextFieldProps };
