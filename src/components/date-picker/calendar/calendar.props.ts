import { WithStyles } from "@shared";
import { ICalendarScss } from "./calendar.scss";
import * as moment from "moment";

type DateRange = {
  startDate?: string;
  endDate?: string;
};

type CalendarProps = WithStyles<ICalendarScss> &
  DateRange & {
    value: any;
    onChange: (value: moment.Moment, isDaySelected?: boolean) => any;
  };

export { CalendarProps, DateRange };
