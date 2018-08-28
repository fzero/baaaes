import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Homepage extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <h1>Cryptorial</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
          error dolor consequuntur, natus eum itaque harum fugit perspiciatis
          nobis id aperiam sed architecto et esse perferendis nisi dolorem
          voluptas repellat.
        </p>
        <button>Existing User</button>
        <button><Link to={'/register'}>Get Started</Link></button>
      </div>
    );
  }
}

export default Homepage;
