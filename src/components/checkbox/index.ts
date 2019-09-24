import { withStyles } from "@shared";
import { Checkbox as Component } from "./checkbox.component";

/**
 * Styled component
 */
const Checkbox = withStyles(require("./checkbox.scss"))(Component);

export { Checkbox };
