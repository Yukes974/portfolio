import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/normalize.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Error404 from "./components/error";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>
);
