import { HTMLAttributes, ReactNode } from "react";
//import { RouteComponentProps } from "react-router-dom";

type ReactComponentProps = {
  children: ReactNode;
};

/**
 * MainPage props
 */
type MainPageProps = HTMLAttributes<HTMLDivElement> & ReactComponentProps;

export { MainPageProps };
