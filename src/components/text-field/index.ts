import { withStyles } from "@shared";
import { TextField as Component } from './text-field.component';
/**
 * Styled component
 */
const TextField = withStyles(require("./text-field.scss"))(Component);

export { TextField };
