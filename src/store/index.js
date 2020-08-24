// importing the thunk
import thunk from "redux-thunk";
// importing the logger
import logger from "redux-logger";
// importing the create store and appymiddleware methid
import { createStore, applyMiddleware } from "redux";
// imporitng the reducers from reducer folder
import reducer from "../reducers";

let store;

// comfiguring the store
export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}
