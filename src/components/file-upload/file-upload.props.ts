import { WithStyles, ChangeHandler } from "@shared";
import { WithError } from "@models";
import { IFileUploadScss } from "./file-upload.scss";

type FileUploadProps = WithStyles<IFileUploadScss> &
  WithError & {
    /**
     * Field name
     */
    name?: string;
    /**
     * Handle upload
     */
    onChange?: ChangeHandler<File | File[]>;
    /**
     * Field value
     */
    value?: File | File[];
    /**
     * Field label
     */
    label?: any;
  };

export { FileUploadProps };
