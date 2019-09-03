import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { PagesProps } from "./pages.props";
import { componentDidMount } from "@shared";
import * as styles from "./pages.scss";
import { Layout } from "./layout";
import { Home } from "./home";
import { About } from "./about";

/**
 * Root component
 */
const Pages = () => {
  return (
    <Layout>
      <Home id="home" />
      <About id="about" />
      <Home id="team" />
      <Home id="work" />
      <Home id="pricing" />
      <Home id="contact" />
    </Layout>
  );
};

export { Pages };
