import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav id="greeting">
      <div id="logo-link"><Link to="/"><img src={window.fasanaDots}/><span id="logo-text">fasana</span></Link></div>
      <div id="greeting-sign-in-container">
        <button onClick={()=> openModal('login')} id="login-link">Log In</button>
        <button onClick={()=> openModal('signup')} id="signup-button">Start Free Trial</button>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <nav id="greeting">
      <h2 className="header-name">Hi, {currentUser.fname}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
