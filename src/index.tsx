import "./styles/main.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Pages } from "./pages/pages.component";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

// import { Store } from "./store";

/**
 * Router history
 */
const history = createBrowserHistory();

/**
 * Stores context
 */

//const store = createStore(history);

/**
 * Render root node
 *
 */
ReactDOM.render(<Pages />, document.getElementById("app"));
