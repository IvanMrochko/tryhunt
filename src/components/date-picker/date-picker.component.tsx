import * as React from "react";
import { DatePickerProps } from "./date-picker.props";
import * as moment from "moment";
import { Calendar } from "./calendar";
import ClickOutside from "react-click-outside";
import { Icon } from "../icon/icon.component";

class DatePicker extends React.Component<DatePickerProps> {
  /**
   * Defaults
   */
  public static defaultProps = {
    startDate: moment()
      .subtract("years", 50)
      .format("YYYY-MM-DD"),
    endDate: moment()
      .add(50, "year")
      .format("YYYY-MM-DD")
  };
  /**
   * State
   */
  public state = {
    isVisibleCalendar: false
  };

  /**
   * Emit change
   */
  public onChange = (value: string) => {
    const { onChange, name } = this.props;

    onChange(name, value);
  };

  /**
   * Renders DatePicker
   */
  public render() {
    const { styles, value, placeholder, startDate, endDate } = this.props;
    const { isVisibleCalendar } = this.state;
    return (
      <ClickOutside
        className={styles.container}
        onClickOutside={() => {
          if (isVisibleCalendar) this.setState({ isVisibleCalendar: false });
        }}
      >
        <div className={styles.datePicker}>
          <div
            className={styles.datePickerField}
            onClick={() =>
              this.setState({ isVisibleCalendar: !isVisibleCalendar })
            }
          >
            <div>{value ? moment(value).format("LL") : placeholder || ""}</div>
            <Icon name="calendar" className={styles.calendarIcon}/>
          </div>
          {isVisibleCalendar && (
            <Calendar
              startDate={startDate}
              endDate={endDate}
              value={value}
              onChange={(value, isDaySelected) => {
                this.onChange(value.format("YYYY-MM-DD"));

                if (isDaySelected) this.setState({ isVisibleCalendar: false });
              }}
            />
          )}
        </div>
      </ClickOutside>
    );
  }
}

export { DatePicker };
