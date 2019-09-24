import { withStyles } from "@shared";
import { TextArea as Component } from './text-area.component';
/**
 * Styled component
 */
const TextArea = withStyles(require("./text-area.scss"))(Component);

export { TextArea };
