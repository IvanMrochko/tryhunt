import { withStyles } from "@shared";
import { Slider as Component } from './slider.component';

/**
 * Styled component
 */
const Slider = withStyles(require("./slider.scss"))(Component);

export { Slider };
