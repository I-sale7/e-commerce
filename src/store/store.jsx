import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import reducers from "./reducers";

console.log(thunk)
const enahncer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducers, enahncer(applyMiddleware(thunk)));

export default store;