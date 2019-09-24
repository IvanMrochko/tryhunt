import { withStyles } from "@shared";
import { Card as Component } from "./card.component";

/**
 * Styled component
 */
const Card = withStyles(require("./card.scss"))(Component);

export { Card };
