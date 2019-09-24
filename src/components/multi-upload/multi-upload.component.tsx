import * as React from "react";
import { Button } from "../button";
import { MultiUploadProps } from "./multi-upload.props";
import { IconButton } from "../icon-button";
import * as classNames from "classnames";
import { DragAndDrop, getFileIcon } from "@shared";
import { Icon } from "../icon";
import { DownloadInfo } from "@models";

class MultiUpload extends React.PureComponent<MultiUploadProps> {
  /**
   * Default props
   */
  public static defaultProps = {
    // value: [],
    onChange: () => {}
  };

  /**
   * Init D&D
   */
  public constructor(props) {
    super(props);
    this.dad = new DragAndDrop(this, this.onChange);
  }

  /**
   * Refs to File input and drop container
   */
  public input: HTMLInputElement;

  /**
   * D&D logic
   */
  public dad: DragAndDrop;

  /**
   * Open file upload window
   */
  public onUpload = () => !this.props.isDisabled && this.input.click();
  /**
   * Handle event on new file input
   */
  public onChange = async files => {
    const { onChange, name, value, isSingle } = this.props;
    const uploades = await DownloadInfo.transform(files, name);
    onChange(
      name,
      isSingle
        ? [uploades[0]]
        : ((value as DownloadInfo[]) || []).concat(uploades)
    );
  };

  /**
   * Handle event on remove button click
   */
  public onRemove = (info: DownloadInfo) => {
    const { value = [], isSingle, onChange, name } = this.props;

    onChange(name, value.filter(item => item != info));
  };

  /**
   * Get files list
   */
  public get list(): DownloadInfo[] {
    const { value, isSingle } = this.props;
    return (value as DownloadInfo[]) || [];
  }
  /**
   * Renders MultiUpload
   */
  public render() {
    const { styles, value, isSingle, isDisabled } = this.props;
    const { dad } = this;
    return (
      <div>
        <div
          className={classNames(styles.header, {
            [styles.headerDropzone]: dad.isOnDropZone,
            [styles.headerDropzoneDisabled]: isDisabled
          })}
          {...(isDisabled ? {} : dad.handlers)}
        >
          <div className={styles.headerCaption}>
            <input
              className={styles.headerInput}
              onChange={event => this.onChange(event.target.files)}
              multiple={!isSingle}
              type="file"
              ref={ref => (this.input = ref)}
            />
            <div>Add or drop files here</div>
          </div>
          <Button className={styles.headerUpload} onClick={this.onUpload}>
            <Icon name="upload" alt="Upload" />
          </Button>
        </div>
        {value && (
          <div className={styles.uploads}>
            {this.list.map((info, index, list) => {
              return (
                <div
                  className={styles.upload}
                  key={index}
                  style={{
                    flexBasis: isSingle || list.length == 1 ? "100%" : "49%"
                  }}
                >
                  <div>
                    <img src={getFileIcon(info.fileName)} alt={info.fileName} />
                  </div>
                  <div className={styles.uploadName}>{info.fileName}</div>
                  <IconButton
                    className={styles.uploadRemove}
                    onClick={() =>
                      !this.props.isDisabled && this.onRemove(info)
                    }
                  >
                    <Icon name="delete" alt="Delete" />
                  </IconButton>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export { MultiUpload };
