import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import bounce from "./script/bounce";

ReactDOM.render(
  <>
    <App />
    {bounce()}
  </>,
  document.getElementById("root")
);
