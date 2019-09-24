import { withStyles } from "@shared";
import { Select as Component } from './select.component';

/**
 * Styled component
 */
const Select = withStyles(require("./select.scss"))(Component);

export { Select };
