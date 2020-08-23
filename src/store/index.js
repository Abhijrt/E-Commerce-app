import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";

let store;

export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}
