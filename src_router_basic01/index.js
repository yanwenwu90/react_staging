// 引入react核心库
import React from "react";

// 引入reactDOM
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

// 引入APP
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
