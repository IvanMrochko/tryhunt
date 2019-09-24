import { withStyles } from "@shared";
import { Switch as Component } from './switch.component';

/**
 * Styled component
 */
const Switch = withStyles(require("./switch.scss"))(Component);

export { Switch };
