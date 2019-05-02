import React, { Component } from "react";

export default class Languages extends Component {
  render() {
    return (
      <div className="Languages">
        I code in
        <div className="languageRoller">
          <div className="paranthesis">/</div>
          <div className="languagesMain">
            <ul>
              <li>JS</li>
              <li>Node.js</li>
              <li>React</li>
              <li>EJS</li>
              <li>Python</li>
              <li>C</li>
              <li>Haskell</li>
              <li>Shell</li>
              <li>Mongo</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="paranthesis">/</div>
          <div />
        </div>
      </div>
    );
  }
}
