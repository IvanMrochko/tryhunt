import * as React from 'react';
import { SwitchProps } from './switch.props';
import * as classNames from 'classnames';

class Switch extends React.PureComponent<SwitchProps> {
  /**
   * Props
   */
  public static defaultProps = {
    value: false,
    onChange: () => {},
  };

  /**
   * Handle change
   */
  public onChange = () => {
    const { onChange, value, name } = this.props;

    onChange(name, !value);
  };
  /**
   * Renders Switch
   */
  public render() {
    const { styles, label, value, name, onChange, className, isError, error, isDisabled, ...props } = this.props;

    return (
      <div {...props} className={classNames(styles.switch, className)}>
        {label && (
          <label onClick={this.onChange} className={styles.label}>
            {label}
          </label>
        )}
        <div
          onClick={this.onChange}
          className={classNames(styles.track, {
            [styles.trackEnabled]: value,
          })}
        >
          <div
            className={classNames(styles.indicator, {
              [styles.indicatorEnabled]: value,
            })}
          />
        </div>
      </div>
    );
  }
}

export { Switch };
