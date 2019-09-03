import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { PagesProps } from "./pages.props";
import { componentDidMount } from "@shared";
import * as styles from "./pages.scss";
import { Layout } from "./layout";
import { Home } from "./home";

/**
 * Root component
 */
const Pages = () => {
  return (
    <Layout>
      <Home id="home" />
      <Home id="home" />
      <Home id="home" />
      <Home id="home" />
    </Layout>
  );
};

export { Pages };
