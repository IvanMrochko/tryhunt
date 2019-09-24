import { WithStyles, ChangeHandler } from "@shared";
import { ISliderScss } from "./slider.scss";

type SliderProps = WithStyles<ISliderScss> & {
  min?: number;
  max?: number;
  isDisabled?: boolean;
  onChange?: ChangeHandler<number | number[]>;
  value?: number | number[];
  name?: string;
  className?: string;
};

export { SliderProps };
