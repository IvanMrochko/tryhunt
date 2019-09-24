import * as React from 'react';
import { TextAreaProps } from './text-area.props';
import * as classNames from 'classnames';

class TextArea extends React.PureComponent<TextAreaProps> {
  /**
   * Field props
   */
  public static defaultProps = {
    type: 'text',
    value: '',
  };

  /**
   * Handle change
   */
  public onChange = event => {
    const { onChange, name } = this.props;

    onChange(name, event.currentTarget.value);
  };
  /**
   * Renders TextField
   */
  public render() {
    const {
      styles,
      onChange,
      label,
      placeholder,
      type,
      value,
      isDisabled,
      isRequired,
      className,
      error,
      isError,
      ...props
    } = this.props;
    return (
      <div
        {...props}
        className={classNames(
          styles.textArea,
          // {
          //   [styles.textAreaDisabled]: isDisabled
          // },
          className,
        )}
      >
        {label && <label className={styles.label}>{label}{isRequired && <span className={styles.required}>*</span>}</label>}
        <div
          className={classNames(styles.box, {
            [styles.boxInvalid]: isError,
          })}
        >
          <textarea
            className={styles.area}
            value={value == null ? '' : value}
            disabled={isDisabled}
            onChange={this.onChange}
            placeholder={placeholder}
          />
        </div>
        {isError && <div className={styles.error}>{error}</div>}
      </div>
    );
  }
}

export { TextArea };
