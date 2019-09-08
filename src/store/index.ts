import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const configureStore = (history: any) => {
  const rootReducers = combineReducers({
    mainrReducer: null
  });
  const composeEnhancers =
    process.env.NODE_ENV === "development"
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : null || compose;
  return createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
