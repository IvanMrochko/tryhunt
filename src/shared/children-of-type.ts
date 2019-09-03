import * as React from "react";

type Constructor = new (...args: any[]) => any;
/**
 * Get specific type of children
 */
const childrenOfType = <T>(children, type: T) =>
  (React.Children.toArray(children).filter(
    item => item["type"] == type
  ) as any) as T extends Constructor ? InstanceType<T>[] : T[];

export { childrenOfType };
