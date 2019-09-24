import { WithStyles, Omit } from "@shared";
import { IIconButtonScss } from "./icon-button.scss";

type IconButtonProps = WithStyles<IIconButtonScss> &
  React.HTMLAttributes<HTMLButtonElement> & {
    /**
     * IconButton type
     */
    type?: string;
    /**
     * IconButton themes
     */
    theme?: "primary" | "danger";
  };

export { IconButtonProps };
