import * as React from "react";
import { FileUploadProps } from "./file-upload.props";
import * as classNames from "classnames";

class FileUpload extends React.PureComponent<FileUploadProps> {
  /**
   * Default props
   */
  public static defaultProps = {
    value: null,
    onChange: () => {}
  };

  /**
   * File input
   */
  public input: HTMLInputElement;

  /**
   * Handle files
   */
  public onChange = event => {
    const { onChange, name } = this.props;
    const [value] = event.target.files;

    onChange(name, value);
  };

  /**
   * Handle button click
   */
  public onClick = () => {
    this.input.click();
  };

  /**
   * Renders FileUpload
   */
  public render() {
    const { styles, name, onChange, value, isError, error } = this.props;

    return (
      <div>
        <div
          className={classNames(styles.button, {
            [styles.buttonClickable]: !value
          })}
          onClick={value ? undefined : this.onClick}
        >
          {value ? (
            <div className={styles.uploaded}>
              <div
                className={styles.clear}
                onClick={() => onChange(name, null)}
              >
                X
              </div>
              <div>
                {Array.isArray(value)
                  ? "Selected " + value.length + " files"
                  : value.name}
              </div>
            </div>
          ) : (
            <div className={styles.upload}>
              <div className={styles.uploadIcon}>icon</div>
              <div>Upload</div>
            </div>
          )}
        </div>
        <input
          className={styles.fileInput}
          type="file"
          onChange={this.onChange}
          ref={ref => (this.input = ref)}
        />
      </div>
    );
  }
}

export { FileUpload };
