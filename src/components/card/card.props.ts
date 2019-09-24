import { WithStyles } from "@shared";
import { ICardScss } from "./card.scss";

type CardProps = WithStyles<ICardScss> &
  React.HTMLAttributes<HTMLDivElement> & {};

export { CardProps };
