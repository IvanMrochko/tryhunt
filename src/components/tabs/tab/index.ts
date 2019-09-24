import { withStyles } from "@shared";
import { Tab as Component } from './tab.component';

/**
 * Styled component
 */
const Tab = withStyles(require("./tab.scss"))(Component);

export { Tab };
