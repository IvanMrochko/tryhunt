import { WithStyles } from "@shared";
import { IDateSelectScss } from "./date-select.scss";

type DateSelectProps = WithStyles<IDateSelectScss> & {
  onChange?: any;
  options?: any[];
  value?: any;
  match: (option, value) => boolean;
};

export { DateSelectProps };
