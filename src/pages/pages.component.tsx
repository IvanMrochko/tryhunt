import * as React from "react";
import { Layout } from "./layout";
import { Home } from "./home";
import { About } from "./about";
import { Team } from "./team";
import { Work } from "./work";
import { Pricing } from "./pricing";
import { Contact } from "./contact";

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
      <Pricing id="pricing" />
      <Contact id="contact" />
    </Layout>
  );
};

export { Pages };
