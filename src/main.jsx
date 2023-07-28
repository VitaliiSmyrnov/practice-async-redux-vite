import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "src/components/App/App.jsx";
import "./index.css";

import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";
import { theme } from "src/constants/theme";
import { store } from "src/redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
