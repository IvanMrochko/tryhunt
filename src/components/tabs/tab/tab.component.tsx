import * as React from "react";
import { TabProps } from "./tab.props";

const Tab: React.SFC<TabProps> = React.memo(
  ({ styles, children }: TabProps) => (
    <div>{children}</div>
  )
)

export { Tab };
