import { WithStyles } from "@shared";
import { ITabScss } from "./tab.scss";
import { ReactElement } from "react";

type TabProps = WithStyles<ITabScss> & {
  /**
   * Disabled tab opening
   */
  isDisabled?: boolean;
  /**
   * Tab title caption
   */
  name: string | ReactElement<any>;
  /**
   * Children
   */
  children: any;
};

export { TabProps };
