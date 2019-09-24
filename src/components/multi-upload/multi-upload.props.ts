import { WithStyles, ChangeHandler } from "@shared";
import { IMultiUploadScss } from "./multi-upload.scss";
import { WithError, DownloadInfo } from "@models";

type MultiUploadProps = WithStyles<IMultiUploadScss> &
  WithError & {
    /**
     * Field name
     */
    name?: string;
    /**
     * Handle upload
     */
    onChange?: ChangeHandler<DownloadInfo[]>;
    /**
     * Form submit handler
     */
    value: DownloadInfo[];
    /**
     * Is single file
     */
    isSingle?: boolean;

    isDisabled: boolean;
  };

export { MultiUploadProps };
