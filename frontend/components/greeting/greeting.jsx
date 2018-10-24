import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => {
    return(
      <header id="greeting">
        <div id="logo-link"><Link to="/"><img src={window.fasanaDots}/><span id="logo-text">fasana</span></Link></div>
        <div id="greeting-sign-in-container">
          <span id="login-link"><Link to='/login'>Log In</Link></span>
          <button id="signup-button"><Link to='/signup'>Start Free Trial</Link></button>
        </div>
      </header>
    );
  }

export default Greeting;
