import React from "react";

import Profile from "./components/Profile";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Projects from "./components/Projects";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Languages />
      <Projects />
    </div>
  );
}

export default App;
