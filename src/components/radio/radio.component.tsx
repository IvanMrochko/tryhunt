import * as React from "react";
import { RadioProps } from "./radio.props";
import * as classNames from "classnames";

class Radio extends React.PureComponent<RadioProps> {
  /**
   * Props
   */
  public static defaultProps = {
    value: false,
    onChange: () => {}
  };

  /**
   * Handle change
   */
  public onChange = () => {
    const { onChange, value, isDisabled, payload, name } = this.props;

    if (isDisabled) return;

    onChange(name, payload);
  };
  /**
   * Renders Radio
   */
  public render() {
    const {
      styles,
      label,
      value,
      name,
      onChange,
      error,
      isError,
      className,
      payload,
      isDisabled,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={classNames(styles.radio, className, {
          [styles.radioDisabled]: isDisabled
        })}
      >
        <div
          onClick={this.onChange}
          className={classNames(styles.flag, {
            [styles.flagActive]: value == payload
          })}
        >
          <div
            className={classNames(styles.flagIndicator, {
              [styles.flagIndicatorActive]: value == payload
            })}
          />
        </div>
        {label && (
          <label onClick={this.onChange} className={styles.label}>
            {label}
          </label>
        )}
      </div>
    );
  }
}

export { Radio };
