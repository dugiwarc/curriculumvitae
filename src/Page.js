import React, { Component } from "react";
import LoadedPage from "./LoadedPage";
import LoadingPage from "./LoadingPage";

export default class Page extends Component {
  constructor() {
    super();
    this.state = {
      hasLoaded: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hasLoaded: true
      });
    }, 1000);
  }
  render() {
    const loadedPage = <LoadedPage />;
    const loader = <LoadingPage />;
    return (
      <div className="App">{this.state.hasLoaded ? loadedPage : loader}</div>
    );
  }
}
