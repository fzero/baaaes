import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

//Components
import Tutorial from "./homePage/Tutorial.jsx";
import TutorialComplete from "./homePage/TutorialComplete.jsx";
import Register from "./homePage/Register.jsx";
import Login from "./homePage/Login.jsx";

class Homepage extends Component {
  render() {
    return (
      <section>
        <Route path="/tutorial" component={Tutorial} />
        <Route path="/tutorialComplete" component={TutorialComplete} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <div>
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </section>
    );
  }
}

export default Homepage;
