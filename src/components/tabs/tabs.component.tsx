import * as React from "react";
import { TabsProps } from "./tabs.props";
import { Tab } from "./tab";
import { childrenOfType } from "@shared";

class Tabs extends React.Component<TabsProps> {
  /**
   * Tabs state
   */
  public state = {
    current: 0
  };

  /**
   * On tab click
   */
  public onClick = current => () => this.setState({ current });

  /**
   * Renders Tabs
   */
  public render() {
    const { styles, children } = this.props;
    const { current } = this.state;
    const tabs = childrenOfType(children, Tab as any);
    return (
      <div className={styles.tabs}>
        <div className={styles.tabsPills}>
          {tabs.map((item, index) => (
            <div key={index} onClick={this.onClick(index)}>
              {item.props.name}
            </div>
          ))}
        </div>
        <div
        // className={styles.content}
        >
          {tabs[current]}
        </div>
      </div>
    );
  }
}

export { Tabs };
