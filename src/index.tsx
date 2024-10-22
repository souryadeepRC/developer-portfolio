import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rootStore } from "src/store/root-store";
import "./index.scss";
import routes from "./routes";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter(routes);
root.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
