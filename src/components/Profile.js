import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div className="nameAndStatus">
          <div className="nameSurname">George Botnaru</div>
          <div className="status">- Full Stack Developer -</div>
        </div>
        <div className="gitHub">
          <i className="fab fa-github" />
          <a href="https://github.com/dugiwarc">dugiwarc</a>
        </div>
      </div>
    );
  }
}
