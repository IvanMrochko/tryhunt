import { withStyles } from "@shared";
import { FileUpload as Component } from './file-upload.component';

/**
 * Styled component
 */
const FileUpload = withStyles(require("./file-upload.scss"))(Component);

export { FileUpload };
