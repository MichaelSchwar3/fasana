import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav id="greeting">
      <section id="greeting-top">
      <div id="logo-link"><Link to="/"><img src={window.fasanaDots}/><span id="logo-text">fasana</span></Link></div>
      <div id="greeting-sign-in-container">
        <button onClick={()=> openModal('login')} id="login-link">Log In</button>
        <button onClick={()=> openModal('signup')} id="signup-button">Start Free Trial</button>
      </div>
      </section>
      <section className="splash-mid-section">
        <span id="splash-text-top">Make more time for the work that matters most</span>
        <span id="splash-text-bot">Asana is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow your business.</span>
        <div id="start-free-trial">
          <input type="email"
            className="login-input"
          />
          <button onClick={()=> openModal('signup')} id="start-free-trial-button">Start Free Trial</button>
        </div>
      </section>
      <footer id="footer-splash">
      </footer>
    </nav>
  );
  const personalGreeting = () => (
    <div>
      <nav id="greeting">
        <h2 className="header-name">Hi, {currentUser.fname}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </nav>
      <section className="splash-mid-section">
        <span id="splash-text-top">Make more time for the work that matters most</span>
        <span id="splash-text-bot">Asana is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow your business.</span>
        <div id="start-free-trial">
          <input type="email"
            className="login-input"
            placeholder="name@company.com"
          />
          <button onClick={()=> openModal('signup')} id="start-free-trial-button">Start Free Trial</button>
        </div>
      </section>
      <footer id="footer-splash">
      </footer>
    </div>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default Greeting;
