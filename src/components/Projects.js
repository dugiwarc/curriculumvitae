import React, { Component } from "react";
import "./Projects.css";

// import img_1 from "../imgs/1.png";
// import img_2 from "../imgs/2.png";
// import img_3 from "../imgs/3.png";
// import img_4 from "../imgs/4.png";

// import img_5 from "../imgs/5.png";
// import img_6 from "../imgs/6.png";
// import img_7 from "../imgs/7.png";
// import img_8 from "../imgs/8.png";
import rocketImg from "../suitcase.png";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }

  handleClick = () => {
    console.log("The clock is ticking");
    this.setState({
      isHidden: !this.state.isHidden
    });
  };
  render() {
    const stylesCircle = this.state.isHidden ? "circle" : "circle show";
    return (
      <div className="Project">
        <hr />
        <div className="Project-container" onClick={this.handleClick}>
          <img src={rocketImg} height={100} alt="projects" />
          <div className={stylesCircle}>
            <div className="text">Nothing here yet.</div>
          </div>
        </div>
        {/* 
        <div className={styles}>

          <div className="projectTitle">
            <a href="http:/tusk.world">Tusk.world</a>
            <div className="projectDesc">
              Tusk is a web app I have built using Node.js, EJS and MongoDB.
              Currently, I am rebuilding it using React instead of EJS.
            </div>
            <div className="projectImages">
              <img src={img_1} alt="" />
              <img src={img_4} alt="" />
              <img src={img_3} alt="" />
              <img src={img_2} alt="" />
            </div>
          </div>

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
              <img src={img_6} alt="" />
              <img src={img_7} alt="" />
              <img src={img_8} alt="" />
            </div>
          </div> 
        </div>
          */}
      </div>
    );
  }
}
