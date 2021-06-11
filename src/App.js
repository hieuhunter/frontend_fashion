import "./App.css";
import { Provider } from "react-redux";
import Routes from "./Router";

import React from "react";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
