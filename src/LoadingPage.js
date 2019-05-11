import React, { Component } from "react";
import "./LoadingPage.css";

export default class LoadingPage extends Component {
  render() {
    return (
      <div className="LoadingPage">
        <div className="loader">
          <div className="ball" />
          <div className="ball" />
          <div className="ball" />
          <div className="ball" />
        </div>
      </div>
    );
  }
}
