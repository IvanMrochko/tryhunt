import * as React from "react";
import * as styles from "./Layout.scss";
import { MainPageProps } from "./Layout.props";
import { Header } from "./header";
import { Footer } from "./footer";

/**
 * Layout component
 */
const Layout = ({ children, ...props }: MainPageProps) => {
  return (
    <div className={styles.mainPage} {...props}>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
