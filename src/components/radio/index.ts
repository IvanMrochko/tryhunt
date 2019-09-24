import { withStyles } from "@shared";
import { Radio as Component } from './radio.component';

/**
 * Styled component
 */
const Radio = withStyles(require("./radio.scss"))(Component);

export { Radio };
