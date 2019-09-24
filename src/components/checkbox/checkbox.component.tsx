import * as React from "react";
import { CheckboxProps } from "./checkbox.props";
import * as classNames from "classnames";
import Svg from "react-inlinesvg";
import {Icon} from "../icon";

class Checkbox extends React.PureComponent<CheckboxProps> {
  /**
   * Props
   */
  public static defaultProps = {
    value: false,
    onChange: () => { }
  };

  /**
   * Handle change
   */
  public onChange = () => {
    const { onChange, value, isDisabled, name } = this.props;

    if (isDisabled) return;

    onChange(name, !value);
  };
  /**
   * Renders Checkbox
   */
  public render() {
    const {
      styles,
      label,
      value,
      name,
      onChange,
      className,
      isError,
      error,
      isDisabled,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={classNames(styles.checkbox, className, {
          [styles.checkboxDisabled]: isDisabled
        })}
      >
        <div
          onClick={this.onChange}
          className={classNames(styles.flag, {
            [styles.flagChecked]: value
          })}
        >
          {" "}
          <Icon name="checkmark" alt="checked"/>{" "}
        </div>
        {label && (
          <label onClick={this.onChange} className={styles.label}>
            {typeof label === "function" ? label() : label}
          </label>
        )}
      </div>
    );
  }
}


// const onChange = () => {
//   const { onChange, value, isDisabled, name } = this.props;

//   if (isDisabled) return;

//   onChange(name, !value);
// };

// const Checkbox: React.SFC<CheckboxProps> = ({
//   styles,
//   label,
//   value,
//   name,
//   onChange,
//   className,
//   isError,
//   error,
//   isDisabled,
//   ...props
// }) => {

//   /**
//    * Renders Checkbox
//    */
//   return (
//     <div
//       {...props}
//       className={classNames(styles.checkbox, className, {
//         [styles.checkboxDisabled]: isDisabled
//       })}
//     >
//       <div
//         onClick={this.onChange}
//         className={classNames(styles.flag, {
//           [styles.flagChecked]: value
//         })}
//       >
//         {" "}
//         <Svg src={require("img/checkmark.svg")} alt="checked" />{" "}
//       </div>
//       {label && (
//         <label onClick={this.onChange} className={styles.label}>
//           {typeof label === "function" ? label() : label}
//         </label>
//       )}
//     </div>
//   )
// }
// Checkbox.defaultProps = {
//   value: false,
//   onChange: () => { }
// }
export { Checkbox };
