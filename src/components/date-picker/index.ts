import { withStyles } from "@shared";
import { DatePicker as Component } from './date-picker.component';

/**
 * Styled component
 */
const DatePicker = withStyles(require("./date-picker.scss"))(Component);

export { DatePicker };
