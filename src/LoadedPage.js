import React, { Component } from "react";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import anime from "animejs";

export default class LoadedPage extends Component {
  render() {
    return (
      <div className="App">
        <canvas />
        <Header />
        <Profile />
        <Languages />
        <Projects />
      </div>
    );
  }
}
