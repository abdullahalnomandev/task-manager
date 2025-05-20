import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import TaskManager from "./TaskManager";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <TaskManager />
  </React.StrictMode>
);
