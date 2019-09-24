import "./styles/main.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Pages } from "./pages/pages.component";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import createStore from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Components } from "./pages/components";
/**
 * Router history
 */
const history = createBrowserHistory();

/**
 * Stores context
 */
const store = createStore(history);

/**
 * Render root node
 *
 */
ReactDOM.render(
  <Provider store={store}>
    {/* <Router>
      <Route exact path="/components" component={Components} />
    </Router> */}
    {/* <Pages /> */}
  </Provider>,
  document.getElementById("app")
);
