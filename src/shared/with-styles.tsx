import * as React from "react";

type ComponentDecorator = <T>(Component: T) => T;

type WithStyles<S = any> = {
  /**
   * Classes map
   */
  styles?: S;
};

/**
 * Wrap with styles
 */
function withStyles(styles) {
  return ((Component => {
    const Result: any = Component;
    const result: any = props => <Result styles={styles} {...props} />;

    result.displayName = "WithStyles";
    return result;
  }) as any) as ComponentDecorator;
}

export { withStyles, WithStyles };
