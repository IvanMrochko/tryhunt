import * as React from "react";
import { Layout } from "./layout";
import { Home } from "./home";
import { About } from "./about";
import { Team } from "./team";
import { Work } from "./work";

/**
 * Root component
 */
const Pages = () => {
  return (
    <Layout>
      <Home id="home" />
      <About id="about" />
      <Team id="team" />
      <Work id="work" />
      <Home id="pricing" />
      <Home id="contact" />
    </Layout>
  );
};

export { Pages };
