import React, { Component } from "react";
import "./Projects.css";

import img_1 from "../imgs/1.png";
import img_2 from "../imgs/2.png";
import img_3 from "../imgs/3.png";
import img_4 from "../imgs/4.png";
import img_5 from "../imgs/5.png";
import img_6 from "../imgs/6.png";

import abc_1 from "../imgs/p1.png";
import abc_2 from "../imgs/p2.png";
import abc_3 from "../imgs/p3.png";

import briefcaseImage from "../suitcase.png";
import openBriefcase from "../open-suitcase.png";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      isClickedTusk: false,
      isClickedABC: false,
      sampleT: "translateX(160px)",
      xCoord: 160,
      isReady: false,
      isReadyABC: false
    };
  }

  handleClick = () => {
    console.log("Blco");
    this.setState({
      isHidden: !this.state.isHidden,
      isClickedTusk: false,
      isClickedABC: false,
      isReady: false,
      isReadyABC: false
    });
  };

  handleCircleTusk = () => {
    this.setState({
      isClickedTusk: true
    });
    setTimeout(() => {
      this.setState({
        isReady: true
      });
    }, 400);
  };

  handleCircleABC = () => {
    this.setState({
      isClickedABC: true
    });
    setTimeout(() => {
      this.setState({
        isReadyABC: true
      });
    }, 400);
  };

  moveRight = () => {
    let updatedCoords = this.state.xCoord + 317;
    if (updatedCoords < 900) {
      this.setState({
        sampleT: `translateX(${updatedCoords}px)`,
        xCoord: updatedCoords
      });
    }
  };

  moveLeft = () => {
    let updatedCoords = this.state.xCoord - 317;
    if (updatedCoords > -900) {
      this.setState({
        sampleT: `translateX(${updatedCoords}px)`,
        xCoord: updatedCoords
      });
    }
  };

  render() {
    const stylesCircleTusk = this.state.isHidden
      ? "circleTusk"
      : this.state.isClickedTusk
      ? "circleTusk showCircleTusk show-presentation-tusk"
      : "circleTusk showCircleTusk";

    const stylesTitleABC = this.state.isClickedABC
      ? "show-circle-abc-title hide"
      : "show-circle-abc-title";

    const stylesCircleABC = this.state.isHidden
      ? "circleABC"
      : this.state.isClickedABC
      ? "circleABC showCircleABC show-presentation-abc"
      : "circleABC showCircleABC";

    const stylesPresentation = this.state.isClickedTusk
      ? "project-images reveal"
      : "project-images";

    const actionStyles = {
      transform: this.state.sampleT
    };

    const projectImagesABC =
      this.state.isClickedABC && this.state.isReadyABC
        ? "project-images-abc reveal"
        : "project-images-abc";

    const projectDescriptionABC =
      this.state.isClickedABC && this.state.isReadyABC
        ? "project-description-abc reveal"
        : "project-description-abc";
    return (
      <div className="Project">
        <div className="Project-container">
          <img
            src={this.state.isHidden ? briefcaseImage : openBriefcase}
            height={this.state.isHidden ? 100 : 200}
            className={this.state.isHidden ? "" : "openBriefcase"}
            alt="projects"
            onClick={this.handleClick}
          />

          <div className={stylesCircleABC} onClick={this.handleCircleABC}>
            <div className={stylesTitleABC}>abc asian</div>
            <div className={projectImagesABC}>
              <img src={abc_1} alt="ss" />
              <img src={abc_2} alt="ss" />
              <img src={abc_3} alt="ss" />
            </div>
            <div className={projectDescriptionABC}>
              <div className="bannerABC">
                <a
                  href="https://stupefied-lichterman-cd4eea.netlify.com/"
                  className="href"
                >
                  Visit
                </a>
              </div>
              ABC Asian is an E-Commerce app I came up with whose sole purpose
              is to display some items that can be added to a cart, and redirect
              you to Paypal to pay for the items added to the cart.
            </div>
          </div>

          <div className={stylesCircleTusk} onClick={this.handleCircleTusk}>
            {/* Show images if circle is ready */}
            <div
              className={
                this.state.isReady
                  ? "Project-images-tusk"
                  : "Project-images-tusk transparent"
              }
            >
              <div
                onClick={this.moveRight}
                className={this.state.isClickedTusk ? "right-button" : ""}
              >
                <div className="square" />
              </div>
              <div
                onClick={this.moveLeft}
                className={this.state.isClickedTusk ? "left-button" : ""}
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

            <div className={this.state.isClickedTusk ? "text hidden" : "text"}>
              tusk.world
            </div>
            <div
              className={
                this.state.isReady
                  ? this.state.isClickedTusk
                    ? "description-text"
                    : "description-text hidden"
                  : "description-text transparent"
              }
            >
              <div className="bannerTusk">
                <a href="http://www.tusk.world" className="href">
                  Visit
                </a>
              </div>
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
