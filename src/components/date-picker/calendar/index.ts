import { withStyles } from "@shared";
import { Calendar as Component } from './calendar.component';

/**
 * Styled component
 */
const Calendar = withStyles(require("./calendar.scss"))(Component);

export { Calendar };
