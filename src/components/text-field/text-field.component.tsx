import * as React from 'react';
import { TextFieldProps } from './text-field.props';
import * as classNames from 'classnames';
import MaskedInput from 'react-input-mask';

class TextField extends React.PureComponent<TextFieldProps> {
  /**
   * Input ref
   */
  public input: HTMLInputElement;
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
   *
   */
  public getInput = () => {
    const { mask } = this.props;

    if (mask) {
      return (
        <MaskedInput
          mask={mask}
          maskChar="_"
          formatChars={{
            '9': '[0-9]',
            a: '[A-Za-z]',
            '*': '[A-Za-z0-9]',
          }}
        />
      );
    }

    return <input />;
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
      helperText,
      isError,
      mask,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={classNames(
          styles.textField,
          // {
          //   [styles.textFieldDisabled]: isDisabled
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
          {React.cloneElement(this.getInput(), {
            [mask ? 'inputRef' : 'ref']: ref => (this.input = ref),
            className: styles.input,
            type,
            value: value == null ? '' : value,
            placeholder: placeholder,
            disabled: isDisabled,
            onChange: this.onChange,
          })}
        </div>
        {isError && <div className={styles.error}>{error}</div>}
        {helperText && <div className={styles.helper}>{helperText}</div>}
      </div>
    );
  }
}

export { TextField };
