import React, { Component } from "react";
import "./Projects.css";

import img_1 from "../imgs/1.png";
import img_2 from "../imgs/2.png";
import img_3 from "../imgs/3.png";
import img_4 from "../imgs/4.png";
import img_5 from "../imgs/5.png";
import img_6 from "../imgs/6.png";

// import img_7 from "../imgs/7.png";
// import img_8 from "../imgs/8.png";

import rocketImg from "../suitcase.png";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      isClicked: false,
      sampleT: "translateX(160px)",
      xCoord: 160,
      isReady: false
    };
  }

  handleClick = () => {
    console.log("The clock is ticking");
    this.setState({
      isHidden: !this.state.isHidden,
      isClicked: false,
      isReady: false
    });
  };

  handleCircle = () => {
    console.log("Blicked");
    this.setState({
      isClicked: true
    });
    setTimeout(() => {
      this.setState({
        isReady: true
      });
    }, 400);
  };

  moveRight = () => {
    let updatedCoords = this.state.xCoord + 317;
    console.log(updatedCoords);
    if (updatedCoords < 900) {
      this.setState({
        sampleT: `translateX(${updatedCoords}px)`,
        xCoord: updatedCoords
      });
    }
  };

  moveLeft = () => {
    let updatedCoords = this.state.xCoord - 317;
    console.log(updatedCoords);
    if (updatedCoords > -900) {
      this.setState({
        sampleT: `translateX(${updatedCoords}px)`,
        xCoord: updatedCoords
      });
    }
  };

  render() {
    const stylesCircle = this.state.isHidden
      ? "circle"
      : this.state.isClicked
      ? "circle show presentation-box"
      : "circle show";

    const stylesPresentation = this.state.isClicked
      ? "project-images reveal"
      : "project-images";

    const actionStyles = {
      transform: this.state.sampleT
    };

    return (
      <div className="Project">
        <div className="Project-container">
          <img
            src={rocketImg}
            height={100}
            alt="projects"
            onClick={this.handleClick}
          />

          <div className={stylesCircle} onClick={this.handleCircle}>
            <div
              className={
                this.state.isReady
                  ? "Project-images"
                  : "Project-images transparent"
              }
            >
              <div
                onClick={this.moveRight}
                className={this.state.isClicked ? "right-button" : ""}
              >
                <div className="square" />
              </div>
              <div
                onClick={this.moveLeft}
                className={this.state.isClicked ? "left-button" : ""}
              >
                <div className="square" />
              </div>
              <img
                style={actionStyles}
                className={stylesPresentation}
                src={img_1}
                alt="1"
              />
              <img
                style={actionStyles}
                className={stylesPresentation}
                src={img_2}
                alt="2"
              />
              <img
                style={actionStyles}
                className={stylesPresentation}
                src={img_3}
                alt="3"
              />
              <img
                style={actionStyles}
                className={stylesPresentation}
                src={img_4}
                alt="4"
              />
              <img
                style={actionStyles}
                className={stylesPresentation}
                src={img_5}
                alt="5"
              />
              <img
                style={actionStyles}
                className={stylesPresentation}
                src={img_6}
                alt="6"
              />
            </div>
            <div className={this.state.isClicked ? "text hidden" : "text"}>
              tusk.world
            </div>
            <div
              className={
                this.state.isReady
                  ? this.state.isClicked
                    ? "description-text"
                    : "description-text hidden"
                  : "description-text transparent"
              }
            >
              Tusk is an app I am working on that uses Node.js, Mongo, Express
              and Socket.io. It allows registered users to post favors, chat,
              search, upload files and others. I am currently working on
              integrating an admin dashboard that will serve as a monitor.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
