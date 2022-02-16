import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./store/rootReducer";
import initialState from "./store/initialState";
import thunk from "redux-thunk";

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
