import { withStyles } from "@shared";
import { IconButton as Component } from './icon-button.component';

/**
 * Styled component
 */
const IconButton = withStyles(require("./icon-button.scss"))(Component);

export { IconButton };
