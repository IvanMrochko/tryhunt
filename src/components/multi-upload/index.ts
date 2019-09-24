import { withStyles } from "@shared";
import { MultiUpload as Component } from "./multi-upload.component";

/**
 * Styled component
 */
const MultiUpload = (withStyles(require("./multi-upload.scss"))(Component)) as any;

export { MultiUpload };
