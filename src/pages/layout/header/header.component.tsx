import * as React from "react";
import * as styles from "./header.scss";
import { HeaderProps } from "./header.props";
import { Link, animateScroll as scroll } from "react-scroll";
/**
 * Header component
 */
const links = ["about", "team", "work", "pricing", "contact"];
const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className={styles.header}>
      <a onClick={scrollToTop}>logo</a>
      <div className={styles.menuLiks}>
        {links.map(value => {
          return (
            <Link
              activeClass="active"
              key={value}
              to={value}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {value}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export { Header };
