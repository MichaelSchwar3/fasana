import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => {
    return(
      <div id="greeting">
        <Link to="/"><img src={window.fasanaDots}/>fasana</Link>
        <div id="greeting-sign-in-container">
          <span id="login-link"><Link to='/login'>Log In</Link></span>
          <button id="signup-button"><Link to='/signup'>Start Free Trial</Link></button>
        </div>
      </div>
    );
  }

export default Greeting;
