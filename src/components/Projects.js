import React, { Component } from "react";

import img_1 from "../imgs/1.png";
import img_2 from "../imgs/2.png";
import img_3 from "../imgs/3.png";
import img_4 from "../imgs/4.png";

import img_5 from "../imgs/5.png";
import img_6 from "../imgs/6.png";
import img_7 from "../imgs/7.png";
import img_8 from "../imgs/8.png";

export default class Projects extends Component {
  render() {
    return (
      <div className="Project">
        <span className="projectMainTitle">Projects</span>
        <hr />
        <div className="projects">
          {/* Tusk.world */}

          <div className="projectTitle">
            <a href="http:/tusk.world">Tusk.world</a>
            <div className="projectDesc">
              Tusk is a web app I have built using Node.js, EJS and MongoDB.
              Currently, I am rebuilding it using React instead of EJS.
            </div>
            <div className="projectImages">
              <img src={img_1} alt="" />
              <div className="theMiddleMan" />
              <img src={img_4} alt="" />
              <div className="theMiddleMan" />
              <img src={img_3} alt="" />
              <div className="theMiddleMan" />
              <img src={img_2} alt="" />
              <div className="theMiddleMan" />
            </div>
          </div>

          {/* Abc Asian */}
          <div className="projectTitle">
            <a href="https://stupefied-lichterman-cd4eea.netlify.com">
              ABC Asian
            </a>
            <div className="projectDesc">
              ABC Asian is my first hands-on experience with React. It serves as
              an e-commerce website and uses Paypal as a payment service.
            </div>
            <div className="projectImages">
              <img src={img_5} alt="" />
              <div className="theMiddleMan" />
              <img src={img_6} alt="" />
              <div className="theMiddleMan" />
              <img src={img_7} alt="" />
              <div className="theMiddleMan" />
              <img src={img_8} alt="" />
              <div className="theMiddleMan" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
