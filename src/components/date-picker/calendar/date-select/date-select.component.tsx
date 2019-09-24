import * as React from "react";
import { DateSelectProps } from "./date-select.props";
import { Icon } from "../../../icon";
import * as moment from "moment";
import ClickOutside from "react-click-outside";

class DateSelect extends React.Component<DateSelectProps> {
  public static defaultProps = {
    options: []
  };
  /**
   * Is visible dropdown
   */
  public state = {
    isVisible: false
  };
  /**
   * Handle change
   */
  public onChange = option => {
    const { onChange } = this.props;

    onChange(option);

    this.setState({
      isVisible: false
    });
  };
  /**
   * Renders DateSelect
   */
  public render() {
    const { styles, options, match, onChange } = this.props;
    const { isVisible } = this.state;
    const selected = options.find(match);
    return (
      <div className={styles.dateSelect}>
        <div
          className={styles.header}
          onClick={() => this.setState({ isVisible: true })}
        >
          <div className={styles.selected}>{selected && selected.name}</div>
          <div className={styles.arrow}>
            <Icon name="arrowDown" />
          </div>
        </div>
        {isVisible && (
          <ClickOutside onClickOutside={() => {
            if (isVisible) this.setState({ isVisible: false });
          }}>
            <div className={styles.dropBox}>
              <ul className={styles.options}>
                {options.map((option, index) => {
                  return (
                    <li
                      className={styles.option}
                      key={index}
                      onClick={() => this.onChange(option)}
                    >
                      {option.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </ClickOutside>
        )}
      </div>
    );
  }
}

export { DateSelect };
