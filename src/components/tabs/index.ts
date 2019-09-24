import { withStyles } from "@shared";
import { Tabs as Component } from "./tabs.component";
import { Tab } from "./tab";

/**
 * Styled component
 */
const Tabs = withStyles(require("./tabs.scss"))(Component);

export { Tabs, Tab };
