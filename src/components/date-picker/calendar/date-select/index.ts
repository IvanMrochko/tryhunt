import { withStyles } from "@shared";
import { DateSelect as Component } from './date-select.component';

/**
 * Styled component
 */
const DateSelect = withStyles(require("./date-select.scss"))(Component);

export { DateSelect };
