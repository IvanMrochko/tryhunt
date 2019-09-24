import { Omit, ChangeHandler, WithStyles } from "@shared";
import { WithError } from "@models";
import { ITextAreaScss } from "./text-area.scss";

type TextAreaProps = WithStyles<ITextAreaScss> &
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
     * Is field required
     */
    isRequired?: boolean;
    /**
     * Change handler
     */
    onChange?: ChangeHandler<string>;
  };

export { TextAreaProps };
