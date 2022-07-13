
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./views/HomePage";

// Pages
//import HomePage from "views/HomePage.js";

function App() {
  return (
    <>
      <Router>
          <Routes>    

              {/* Routes */}
              {/* TODO: could direct unknown URL to PageNotFound page displaying 404 error */}
              <Route path="/" element = {<HomePage />} />

              <Route path="*" element={<Navigate to="not-found"/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
