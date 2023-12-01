import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

import "./assets/css/style.css";
import "./assets/css/satoshi.css";

import { ThemeProvider } from "@material-tailwind/react";
import { HomeProvider } from "./contexts/NavigationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomeProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    </HomeProvider>
   
  </React.StrictMode>
);
