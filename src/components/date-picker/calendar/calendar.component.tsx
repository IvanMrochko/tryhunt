import * as React from "react";
import { CalendarProps } from "./calendar.props";
import * as moment from "moment";
import { DateSelect } from "./date-select";
import * as classNames from "classnames";

class Calendar extends React.Component<CalendarProps> {
  /**
   * Years list
   */
  public get years() {
    const { startDate, endDate } = this.props;
    const years = [];

    for (let i = moment(startDate).year(); i <= moment(endDate).year(); i++) {
      years.push({
        id: i,
        name: i
      });
    }

    return years;
  }

  /**
   * Months list
   */
  public get months() {
    return [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ].map((name, index) => ({
      id: index,
      name
    }));
  }

  /**
   * Get days
   */
  public get days() {
    const { value = moment().format("YYYY-MM-DD") } = this.props;
    const date = moment(value);
    const firstDay = moment(date).startOf("month");

    const monthDays = date.daysInMonth();
    const result: moment.Moment[] = [];

    for (let i = 1; i < monthDays; i++) {
      result.push(moment(firstDay).date(i));
    }

    while (result[0].weekday() != 0) {
      result.unshift(moment(result[0]).subtract(1, "days"));
    }

    while (result[result.length - 1].weekday() != 6) {
      result.push(moment(result[result.length - 1]).add(1, "days"));
    }

    return result;
  }
  /**
   * Renders Calendar
   */
  public render() {
    const {
      styles,
      startDate,
      endDate,
      value = moment().format("YYYY-MM-DD"),
      onChange
    } = this.props;
    const week = moment.weekdays();
    const date = moment(value);

    return (
      <div className={styles.calendar}>
        <div className={styles.header}>
          <DateSelect
            options={this.months}
            match={option => option.id == date.month()}
            onChange={month => onChange(moment(value).month(month.id))}
          />
          <DateSelect
            options={this.years}
            match={option => option.id == date.year()}
            onChange={year => onChange(moment(value).year(year.id))}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.weeks}>
            {week.map((item, index) => {
              return (
                <div key={index} className={styles.week}>
                  {item.substring(0, 1)}
                </div>
              );
            })}
          </div>
          <div className={styles.days}>
            {this.days.map((item, index) => {
              const isOutOfRange =
                item.isAfter(endDate) || item.isBefore(startDate);
              return (
                <div
                  className={classNames(styles.day, {
                    [styles.dayInAnotherMonth]: item.month() != date.month(),
                    [styles.daySelected]: item.format("YYYY-MM-DD") == value,
                    [styles.dayOut]: isOutOfRange
                  })}
                  key={index}
                  onClick={() => {
                    if (isOutOfRange) return;
                    onChange(item, true);
                  }}
                >
                  {item.date()}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export { Calendar };
