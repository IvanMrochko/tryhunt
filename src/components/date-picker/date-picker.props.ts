import { WithStyles, ChangeHandler } from "@shared";
import { IDatePickerScss } from "./date-picker.scss";
import { DateRange } from "./calendar/calendar.props";

type DatePickerProps = WithStyles<IDatePickerScss> &
  DateRange & {
    name?: string;

    placeholder?: string;
    value?: string;
    onChange?: ChangeHandler<string>;
  };

export { DatePickerProps };
