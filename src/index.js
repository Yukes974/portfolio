import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/normalize.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
