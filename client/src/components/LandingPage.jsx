import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <section>
        <div>
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </section>
    );
  }
}

export default Homepage;
