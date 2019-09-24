import { withStyles } from "@shared";
import { MultiInput as Component } from './multi-input.component';

/**
 * Styled component
 */
const MultiInput = withStyles(require("./multi-input.scss"))(Component);

export { MultiInput };
